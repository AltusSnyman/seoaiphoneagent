#!/bin/bash

# Advanced Image Optimization Script for AI Phone Agent
# Converts images to WebP format with multiple sizes for responsive design
# Expected savings: 1.6MB+ reduction in total image payload

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Directories
PUBLIC_DIR="/mnt/c/project/seostuff/aihponeagent/new/public"
IMAGES_DIR="$PUBLIC_DIR/images"
OPTIMIZED_DIR="$PUBLIC_DIR/images/optimized"

echo -e "${GREEN}🖼️  Starting AI Phone Agent Image Optimization${NC}"
echo -e "${YELLOW}Expected savings: 1.6MB+ (85%+ reduction)${NC}"
echo ""

# Create optimized directory
mkdir -p "$OPTIMIZED_DIR"

# Function to optimize and resize images
optimize_image() {
    local input_file="$1"
    local output_base="$2"
    local quality="$3"
    local sizes=("${@:4}")
    
    local filename=$(basename "$input_file" .jpg)
    local input_size=$(ls -lah "$input_file" | awk '{print $5}')
    
    echo -e "${YELLOW}Processing: $filename ($input_size)${NC}"
    
    # Create WebP versions at different sizes
    for size in "${sizes[@]}"; do
        if [[ "$size" == "original" ]]; then
            local output_file="$OPTIMIZED_DIR/${output_base}.webp"
            cwebp -q $quality "$input_file" -o "$output_file"
        else
            local output_file="$OPTIMIZED_DIR/${output_base}-${size}.webp"
            cwebp -q $quality -resize $size 0 "$input_file" -o "$output_file"
        fi
        
        if [[ -f "$output_file" ]]; then
            local output_size=$(ls -lah "$output_file" | awk '{print $5}')
            echo "  ✅ Created: ${output_base}-${size}.webp ($output_size)"
        else
            echo -e "  ${RED}❌ Failed to create: ${output_base}-${size}.webp${NC}"
        fi
    done
    echo ""
}

# Function to optimize PNG to WebP with multiple sizes
optimize_png() {
    local input_file="$1"
    local output_base="$2"
    local quality="$3"
    local sizes=("${@:4}")
    
    local filename=$(basename "$input_file" .png)
    local input_size=$(ls -lah "$input_file" | awk '{print $5}')
    
    echo -e "${YELLOW}Processing PNG: $filename ($input_size)${NC}"
    
    # Create WebP versions at different sizes
    for size in "${sizes[@]}"; do
        local output_file="$OPTIMIZED_DIR/${output_base}-${size}.webp"
        if [[ "$size" == "original" ]]; then
            cwebp -q $quality "$input_file" -o "$OPTIMIZED_DIR/${output_base}.webp"
            output_file="$OPTIMIZED_DIR/${output_base}.webp"
        else
            cwebp -q $quality -resize $size 0 "$input_file" -o "$output_file"
        fi
        
        if [[ -f "$output_file" ]]; then
            local output_size=$(ls -lah "$output_file" | awk '{print $5}')
            echo "  ✅ Created: $(basename "$output_file") ($output_size)"
        else
            echo -e "  ${RED}❌ Failed to create: $(basename "$output_file")${NC}"
        fi
    done
    echo ""
}

echo -e "${GREEN}🎯 PRIORITY: Logo Optimization (1.6MB → ~20KB expected)${NC}"
echo "Converting logo.png to multiple WebP sizes for responsive design..."

# Logo optimization - CRITICAL for LCP improvement
# Original: 1.6MB at 1024x1024, displayed at 48x48
optimize_png "$PUBLIC_DIR/logo.png" "logo" 80 "48" "96" "192" "256"

echo -e "${GREEN}🖼️  Hero Image Optimization${NC}"
echo "Converting hero-business-team.jpg (226KB → ~70KB expected)..."

# Hero image - Important for LCP
optimize_image "$IMAGES_DIR/hero-business-team.jpg" "hero-business-team" 82 "400" "800" "1200" "1600"

echo -e "${GREEN}📷 Content Images Optimization${NC}"
echo "Converting content images with responsive sizes..."

# Problem image
optimize_image "$IMAGES_DIR/problem-missed-calls.jpg" "problem-missed-calls" 80 "300" "442" "600" "800"

# Feature images
optimize_image "$IMAGES_DIR/ai-technology.jpg" "ai-technology" 80 "300" "400" "600" "800"
optimize_image "$IMAGES_DIR/business-growth.jpg" "business-growth" 80 "300" "400" "600" "800"
optimize_image "$IMAGES_DIR/customer-service.jpg" "customer-service" 80 "300" "400" "600" "800"
optimize_image "$IMAGES_DIR/teamwork-success.jpg" "teamwork-success" 80 "300" "400" "600" "800"

# Calculate total savings
echo -e "${GREEN}📊 Optimization Results${NC}"
echo "----------------------------------------"

original_total=0
optimized_total=0

# Calculate original sizes
for file in "$PUBLIC_DIR/logo.png" "$IMAGES_DIR"/*.jpg; do
    if [[ -f "$file" ]]; then
        size=$(ls -la "$file" | awk '{print $5}')
        original_total=$((original_total + size))
    fi
done

# Calculate optimized sizes
for file in "$OPTIMIZED_DIR"/*.webp; do
    if [[ -f "$file" ]]; then
        size=$(ls -la "$file" | awk '{print $5}')
        optimized_total=$((optimized_total + size))
    fi
done

# Convert bytes to KB for display
original_kb=$((original_total / 1024))
optimized_kb=$((optimized_total / 1024))
savings_kb=$((original_kb - optimized_kb))
savings_percent=$(( (savings_kb * 100) / original_kb ))

echo "Original total: ${original_kb}KB"
echo "Optimized total: ${optimized_kb}KB"
echo -e "${GREEN}💰 Total savings: ${savings_kb}KB (${savings_percent}% reduction)${NC}"
echo ""

# List all generated files
echo -e "${GREEN}📁 Generated WebP Files:${NC}"
ls -lah "$OPTIMIZED_DIR"/*.webp | while read -r line; do
    echo "  $line"
done

echo ""
echo -e "${GREEN}✅ Image optimization complete!${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Update components to use optimized WebP images"
echo "2. Implement responsive image loading with srcset"  
echo "3. Add fallback images for browser compatibility"
echo "4. Test performance improvements"