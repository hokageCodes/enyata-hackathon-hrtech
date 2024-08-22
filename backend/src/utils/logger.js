const fs = require('fs');
const winston = require('winston');
// const { google } = require('googleapis');
const path = require('path');

// Configure Winston logger
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: path.join(logDir, 'app.log') })
    ],
});

// Function to upload log file to Google Drive
// async function uploadLogToDrive() {
//     const auth = new google.auth.GoogleAuth({
//         keyFile: 'path/to/your/service-account-file.json',
//         scopes: ['https://www.googleapis.com/auth/drive.file'],
//     });

//     const drive = google.drive({ version: 'v3', auth });

//     const fileMetadata = {
//         name: 'app.log',
//         parents: ['your-folder-id'], // Optional: specify the folder ID
//     };

//     const media = {
//         mimeType: 'text/plain',
//         body: fs.createReadStream(path.join(logDir, 'app.log')),
//     };

//     try {
//         const response = await drive.files.create({
//             resource: fileMetadata,
//             media: media,
//             fields: 'id',
//         });
//         console.log('File uploaded to Google Drive with ID:', response.data.id);
//     } catch (error) {
//         console.error('Error uploading file to Google Drive:', error);
//     }
// }


module.exports = logger;