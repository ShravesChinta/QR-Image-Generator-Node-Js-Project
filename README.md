# QR-Image-Generator-Node-Js-Project

# QR Code Image Generator

This Node.js application generates a QR code image from a user-provided URL and saves it as a PNG file. It also saves the URL to a text file.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
Navigate to the project directory:

### bash
cd qr-code-generator-nodejs
Install dependencies:

### bash
npm install


## Usage
Run the application:

### bash
node index.js

### Follow the prompts:

1) You will be prompted to type in a URL.
2) After entering the URL, the application will generate a QR code image and save it as "url-qr-image.png" in the current directory. It will also save the URL to "URL.txt".

### Dependencies
inquirer: For interactive command-line user interface.
qr-image: For generating QR code images.
fs: Node.js core module for file system operations.

## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.
