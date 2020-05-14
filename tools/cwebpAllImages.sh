#!/bin/bash


for file in `find ./static \( -name \*.png -o -name \*.jpg -o -name \*jpeg \) -print`; do ~/libwebp-1.0.3-linux-x86-64/bin/cwebp "$file" -o "${file%.*}.webp"; done
