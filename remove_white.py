from PIL import Image
import os

input_path = "public/logo/LogoBEMKM.png"
output_path = "public/logo/LogoBEMKM.png"

img = Image.open(input_path)
img = img.convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # Remove pure white or almost white
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save(output_path, "PNG")
print("Successfully removed white background from LogoBEMKM.png")
