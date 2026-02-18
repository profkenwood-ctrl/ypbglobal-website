/**
 * Google Apps Script untuk YPBG Contact Form
 * 
 * INSTRUKSI PENGGUNAAN:
 * 1. Buka https://script.google.com/
 * 2. Buat project baru
 * 3. Copy-paste kode ini
 * 4. Ganti FOLDER_ID dan SPREADSHEET_ID dengan milik Anda
 * 5. Deploy sebagai Web App dengan akses "Anyone"
 * 6. Copy URL Web App dan paste ke google-drive-integration.js
 */

// ===== CONFIGURATION =====
// Ganti dengan ID folder Google Drive Anda untuk menyimpan file upload
const FOLDER_ID = '1T9eHs8YqReD_G1j3O3RKAtgfnQ7hxaLG';

// Ganti dengan ID Google Spreadsheet Anda untuk menyimpan data form
const SPREADSHEET_ID = '1fOlqG08gnuYljijDPExCABesXgFYRRDyF4QRmZaguks';

// ===== MAIN FUNCTION =====
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    const data = e.parameter;
    const name = data.name;
    const email = data.email;
    const message = data.message;
    const timestamp = data.timestamp || new Date().toISOString();
    
    // Save to Google Sheets
    const sheetId = saveToSheet(name, email, message, timestamp);
    
    // Handle file upload if exists
    let fileUrl = '';
    if (data.fileData && data.fileName) {
      fileUrl = saveFileToDrive(data.fileData, data.fileName, data.fileType, name, email);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        sheetId: sheetId,
        fileUrl: fileUrl,
        message: 'Data berhasil disimpan'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } finally {
    lock.releaseLock();
  }
}

// ===== SAVE TO GOOGLE SHEETS =====
function saveToSheet(name, email, message, timestamp) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Check if header exists, if not create it
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message', 'File URL', 'Processed']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f0f0f0');
    }
    
    // Add new row
    const rowData = [timestamp, name, email, message, '', 'Pending'];
    sheet.appendRow(rowData);
    
    const lastRow = sheet.getLastRow();
    return lastRow;
    
  } catch (error) {
    Logger.log('Error saving to sheet: ' + error.toString());
    throw error;
  }
}

// ===== SAVE FILE TO GOOGLE DRIVE =====
function saveFileToDrive(base64Data, fileName, fileType, senderName, senderEmail) {
  try {
    // Get or create folder
    let folder;
    try {
      folder = DriveApp.getFolderById(FOLDER_ID);
    } catch (e) {
      // If folder doesn't exist, create it
      folder = DriveApp.createFolder('YPBG Contact Form Uploads');
    }
    
    // Create subfolder by date (YYYY-MM-DD)
    const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
    let dateFolder;
    const folders = folder.getFolders();
    while (folders.hasNext()) {
      const f = folders.next();
      if (f.getName() === today) {
        dateFolder = f;
        break;
      }
    }
    if (!dateFolder) {
      dateFolder = folder.createFolder(today);
    }
    
    // Decode base64 data
    const data = base64Data.split(',')[1]; // Remove data:image/jpeg;base64, prefix
    const blob = Utilities.newBlob(Utilities.base64Decode(data), fileType, fileName);
    
    // Create unique filename
    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmmss');
    const safeName = senderName.replace(/[^a-zA-Z0-9]/g, '_');
    const newFileName = timestamp + '_' + safeName + '_' + fileName;
    
    // Save file
    const file = dateFolder.createFile(blob);
    file.setName(newFileName);
    
    // Set file permissions (optional - make accessible to owner only)
    file.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE);
    
    // Get file URL
    const fileUrl = file.getUrl();
    
    // Update spreadsheet with file URL
    updateSheetWithFileUrl(senderEmail, fileUrl);
    
    Logger.log('File saved: ' + fileUrl);
    return fileUrl;
    
  } catch (error) {
    Logger.log('Error saving file: ' + error.toString());
    throw error;
  }
}

// ===== UPDATE SHEET WITH FILE URL =====
function updateSheetWithFileUrl(email, fileUrl) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // Find the row with matching email (search from bottom)
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i][2] === email && data[i][4] === '') {
        // Update file URL column (column E = index 4)
        sheet.getRange(i + 1, 5).setValue(fileUrl);
        // Update status column (column F = index 5)
        sheet.getRange(i + 1, 6).setValue('Completed');
        break;
      }
    }
    
  } catch (error) {
    Logger.log('Error updating sheet: ' + error.toString());
  }
}

// ===== HELPER FUNCTION - GET SPREADSHEET ID =====
function getSpreadsheetId() {
  return SpreadsheetApp.getActiveSpreadsheet().getId();
}

// ===== HELPER FUNCTION - GET FOLDER ID =====
function getFolderId() {
  const folderName = 'YPBG Contact Form Uploads';
  const folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next().getId();
  } else {
    const folder = DriveApp.createFolder(folderName);
    return folder.getId();
  }
}

// ===== TEST FUNCTION =====
function testFunction() {
  Logger.log('Spreadsheet ID: ' + getSpreadsheetId());
  Logger.log('Folder ID: ' + getFolderId());
}
