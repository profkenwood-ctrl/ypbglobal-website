#!/bin/bash

# Script untuk update path gambar dari .jpg ke .webp di semua file program

PROGRAMS_DIR="programs"

echo "🔄 Updating image paths from .jpg to .webp in programs..."

# Update all program files
for file in "$PROGRAMS_DIR"/*.html; do
    if [ -f "$file" ]; then
        echo "Updating: $file"
        
        # Replace .jpg with .webp
        sed -i '' 's/\.jpg/.webp/g' "$file"
        
        echo "✅ Updated: $file"
    fi
done

echo ""
echo "🎉 All program files updated!"
echo "Images path changed from .jpg to .webp"
