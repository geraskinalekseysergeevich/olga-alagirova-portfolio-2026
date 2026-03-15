#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CASES_DIR="${1:-"$ROOT_DIR/public/cases"}"

if ! command -v cwebp >/dev/null 2>&1; then
	echo "cwebp is not installed. Run: brew install webp"
	exit 1
fi

if [ ! -d "$CASES_DIR" ]; then
	echo "Directory not found: $CASES_DIR"
	exit 1
fi

converted=0

while IFS= read -r -d '' file_path; do
	file_name_lower="$(basename "$file_path" | tr '[:upper:]' '[:lower:]')"
	file_ext_lower="${file_name_lower##*.}"
	output_path="${file_path%.*}.webp"
	quality=82

	if [[ "$file_name_lower" == header.* || "$file_name_lower" == preview.* ]]; then
		quality=90
	fi

	if [[ "$file_ext_lower" == "png" ]]; then
		quality=90
	fi

	cwebp -quiet -mt -m 6 -q "$quality" "$file_path" -o "$output_path"
	converted=$((converted + 1))
done < <(find "$CASES_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)

echo "Converted $converted files to WebP in: $CASES_DIR"
