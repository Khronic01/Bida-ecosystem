#!/bin/bash

echo "Setting up BIDA project..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Please install Node.js first."
    echo "You can download it from: https://nodejs.org/"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "npm not found. Please install npm first."
    exit 1
fi

echo "Installing dependencies..."
npm install

echo "Dependencies installed successfully!"

echo "Starting development server..."
npm run dev
