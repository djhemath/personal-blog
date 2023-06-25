#!/bin/bash

echo "Deploy process started"

# Define source directory and destination directory
src_dir="out"
dest_dir="deploy"

# Check if the new directory already exists
if [ -d $dest_dir ]; then
    echo "Cleaning existing deploy directory..."
  # If it exists, remove all of its contents
  rm -r $dest_dir/*
else
  # Otherwise, create the new directory
  echo "Creating deploy directory..."
  mkdir $dest_dir
fi

# Create the new directory if it doesn't exist
mkdir -p $dest_dir

# Copy contents of 'out' to the new directory
cp -r $src_dir/* $dest_dir/

echo "Restrcuturing the exported static files..."

# Use find to iterate over all HTML files in the new directory and its subdirectories
find $dest_dir -name "*.html" -type f | while read file; do
  # Extract the base name of the file without the extension
  base_name=$(basename "$file" .html)

    # Skip the loop if the base name is 404
    if [ "$base_name" == "404" ] || [ "$base_name" == "index" ]; then
        continue
    fi

  # Extract directory path of the file
  dir_name=$(dirname "$file")

  # Create a new directory with the base name of the file
  mkdir -p "$dir_name/$base_name"

  # Move the file to the new directory and rename it to index.html
  mv "$file" "$dir_name/$base_name/index.html"
done

echo "Initiating firebase deploy..."

firebase deploy --only hosting;

echo "Done!"; 