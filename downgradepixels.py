from PIL import Image
import os 

# =====================
# CONFIGURATION
# =====================

INPUT_DIR = "bridge/assets/images/phone_image"
OUTPUT_DIR = "bridge/assets/images/output"

BASE_WIDTH = 180          # 1x width (matches your CSS phone size)
ASPECT_RATIO = 19.5 / 9  # iPhone Pro Max screen ratio (height / width)

SCALES = {
    "1x": 1,
    "2x": 2,
    "3x": 3
}

os.makedirs(OUTPUT_DIR, exist_ok=True)

# =====================
# HELPERS
# =====================

def resize_and_crop(img, target_width, target_height):
    """
    Resize while preserving aspect ratio, then center-crop
    to exactly match the target aspect ratio.
    """
    img_ratio = img.height / img.width
    target_ratio = target_height / target_width

    if img_ratio > target_ratio:
        # Image too tall → crop height
        new_height = int(img.width * target_ratio)
        top = (img.height - new_height) // 2
        img = img.crop((0, top, img.width, top + new_height))
    else:
        # Image too wide → crop width
        new_width = int(img.height / target_ratio)
        left = (img.width - new_width) // 2
        img = img.crop((left, 0, left + new_width, img.height))

    return img.resize((target_width, target_height), Image.LANCZOS)

# =====================
# PROCESS IMAGES
# =====================

for filename in os.listdir(INPUT_DIR):
    if not filename.lower().endswith((".png", ".jpg", ".jpeg")):
        continue

    input_path = os.path.join(INPUT_DIR, filename)
    base_name, _ = os.path.splitext(filename)

    img = Image.open(input_path).convert("RGBA")

    for label, scale in SCALES.items():
        width = BASE_WIDTH * scale
        height = int(width * ASPECT_RATIO)

        output_img = resize_and_crop(img, width, height)

        output_filename = f"{base_name}@{label}.png"
        output_path = os.path.join(OUTPUT_DIR, output_filename)

        output_img.save(output_path, optimize=True)

        print(f"Saved: {output_path}")

