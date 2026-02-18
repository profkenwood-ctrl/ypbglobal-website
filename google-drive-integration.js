// ===== GOOGLE SHEETS & DRIVE INTEGRATION =====
// Configuration - Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzGib2xLsGWYIOcZAcYEh_J764VfQnDj0EudU_02DVyCev6r6g6keySMqr_4frI4EwX/exec';

// File upload configuration
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB in bytes
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/jpg'];
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg'];

// Debug mode - set to true to see console logs
const DEBUG = true;

function log(message, data = null) {
    if (DEBUG) {
        console.log('[YPBG Form]', message, data || '');
    }
}

function error(message, data = null) {
    console.error('[YPBG Form Error]', message, data || '');
}

// ===== FORM VALIDATION =====
function validateFile(file) {
    if (!file) {
        return { valid: true }; // File is optional
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
        return {
            valid: false,
            message: 'Ukuran file melebihi 25 MB. Silakan pilih file yang lebih kecil.'
        };
    }

    // Check file type
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
        return {
            valid: false,
            message: 'Format file tidak didukung. Hanya PDF dan JPG yang diperbolehkan.'
        };
    }

    return { valid: true };
}

function validateForm(form) {
    const name = form.querySelector('#form-name').value.trim();
    const email = form.querySelector('#form-email').value.trim();
    const message = form.querySelector('#form-message').value.trim();
    const fileInput = form.querySelector('#form-file');
    const file = fileInput.files[0];

    let isValid = true;

    // Validate name
    const errorName = form.querySelector('#error-name');
    if (!name) {
        errorName.textContent = 'Nama harus diisi';
        isValid = false;
    } else {
        errorName.textContent = '';
    }

    // Validate email
    const errorEmail = form.querySelector('#error-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorEmail.textContent = 'Email harus diisi';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        errorEmail.textContent = 'Format email tidak valid';
        isValid = false;
    } else {
        errorEmail.textContent = '';
    }

    // Validate message
    const errorMessage = form.querySelector('#error-message');
    if (!message) {
        errorMessage.textContent = 'Pesan harus diisi';
        isValid = false;
    } else {
        errorMessage.textContent = '';
    }

    // Validate file
    const errorFile = form.querySelector('#error-file');
    const fileValidation = validateFile(file);
    if (!fileValidation.valid) {
        errorFile.textContent = fileValidation.message;
        isValid = false;
    } else {
        errorFile.textContent = '';
    }

    return { isValid, name, email, message, file };
}

// ===== CONVERT FILE TO BASE64 =====
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// ===== SUBMIT TO GOOGLE SHEETS & DRIVE =====
async function submitToGoogleSheets(data) {
    log('Submitting data to Google Sheets...', data);
    
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('timestamp', new Date().toISOString());

    if (data.fileBase64) {
        log('File detected, adding to form data...');
        formData.append('fileName', data.fileName);
        formData.append('fileType', data.fileType);
        formData.append('fileData', data.fileBase64);
    }

    try {
        // Use no-cors mode for Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });

        log('Response received:', response);
        
        // With no-cors, we can't read the response, but if we get here, it worked
        return {
            success: true,
            message: 'Data submitted successfully'
        };
    } catch (fetchError) {
        error('Fetch error:', fetchError);
        throw fetchError;
    }
}

// ===== FORM SUBMISSION HANDLER =====
async function handleContactFormSubmit(e) {
    e.preventDefault();
    
    log('=== FORM SUBMIT TRIGGERED ===');
    log('Event type:', e.type);
    log('Event target:', e.target);

    const form = document.getElementById('contact-form');
    const messageBox = document.getElementById('form-message-box');
    const submitBtn = form.querySelector('.btn-submit');

    log('Form found:', !!form);
    log('Message box found:', !!messageBox);
    log('Submit button found:', !!submitBtn);

    // Validate form
    const validation = validateForm(form);
    log('Form validation result:', validation.isValid);
    
    if (!validation.isValid) {
        error('Form validation failed');
        return;
    }

    log('Form data:', {
        name: validation.name,
        email: validation.email,
        message: validation.message,
        hasFile: !!validation.file
    });

    // Disable submit button
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳</span> <span>Mengirim...</span>';
    messageBox.className = 'form-message';
    messageBox.textContent = '';

    try {
        log('Preparing form data...');
        
        // Prepare data
        const formData = {
            name: validation.name,
            email: validation.email,
            message: validation.message
        };

        // Handle file upload if exists
        if (validation.file) {
            log('Converting file to base64...');
            formData.fileBase64 = await fileToBase64(validation.file);
            formData.fileName = validation.file.name;
            formData.fileType = validation.file.type;
            log('File converted:', formData.fileName);
        }

        log('Submitting to Google Sheets...');
        log('Google Script URL:', GOOGLE_SCRIPT_URL);
        
        // Submit to Google Sheets
        const result = await submitToGoogleSheets(formData);

        log('Submit result:', result);

        if (result.success) {
            messageBox.className = 'form-message success';
            messageBox.textContent = '✓ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.';
            form.reset();
            log('Form reset successfully');
        } else {
            throw new Error(result.message || 'Gagal mengirim pesan');
        }

    } catch (error) {
        error('Submission error:', error);
        error('Error stack:', error.stack);
        messageBox.className = 'form-message error';
        messageBox.textContent = '✗ Terjadi kesalahan: ' + error.message + '. Silakan coba lagi atau hubungi kami via email.';
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        log('Submit button re-enabled');

        // Clear message after 5 seconds
        setTimeout(() => {
            messageBox.textContent = '';
        }, 5000);
    }
}

// Export functions for global access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateFile,
        validateForm,
        fileToBase64,
        submitToGoogleSheets,
        handleContactFormSubmit
    };
}
