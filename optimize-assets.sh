#!/bin/bash

# Script untuk kompresi video dan gambar YPBG Website
# Requirements: ffmpeg, cwebp (install dengan: brew install ffmpeg webp)

echo "🚀 YPBG Website Asset Optimizer"
echo "================================"
echo ""

VIDEOS_DIR="assets/videos"
IMAGES_DIR="assets/images"

# Check if tools are installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg not found. Please install: brew install ffmpeg"
    exit 1
fi

if ! command -v cwebp &> /dev/null; then
    echo "❌ WebP tools not found. Please install: brew install webp"
    exit 1
fi

echo "✅ Required tools found!"
echo ""

# Compress Video
if [ -f "$VIDEOS_DIR/Hero_Video.mp4" ]; then
    echo "📹 Compressing video..."
    echo "   Original: $(ls -lh $VIDEOS_DIR/Hero_Video.mp4 | awk '{print $5}')"
    
    ffmpeg -i "$VIDEOS_DIR/Hero_Video.mp4" \
      -vcodec libx264 \
      -crf 28 \
      -preset medium \
      -acodec aac \
      -b:a 128k \
      -vf "scale=1920:1080" \
      -movflags +faststart \
      "$VIDEOS_DIR/Hero_Video_Compressed.mp4" \
      -y
    
    echo "   Compressed: $(ls -lh $VIDEOS_DIR/Hero_Video_Compressed.mp4 | awk '{print $5}')"
    echo "✅ Video compression complete!"
    echo ""
else
    echo "⚠️  Video file not found: $VIDEOS_DIR/Hero_Video.mp4"
fi

# Compress Images
echo "🖼️  Optimizing images..."
cd "$IMAGES_DIR"

for img in *.jpg *.jpeg *.png; do
    if [ -f "$img" ]; then
        original_size=$(ls -lh "$img" | awk '{print $5}')
        echo "   Processing: $img ($original_size)"
        
        # Convert to WebP with quality 80
        cwebp -q 80 "$img" -o "${img%.*}.webp" -quiet
        
        echo "   Created: ${img%.*}.webp"
    fi
done

cd - > /dev/null
echo "✅ Image optimization complete!"
echo ""

echo "🎉 All optimizations complete!"
echo ""
echo "📊 Summary:"
echo "   Video: $VIDEOS_DIR/Hero_Video_Compressed.mp4"
echo "   Images: $IMAGES_DIR/*.webp"
echo ""
echo "⚠️  Don't forget to:"
echo "   1. Test the compressed video"
echo "   2. Update HTML to use compressed assets"
echo "   3. Commit and push to Netlify"
