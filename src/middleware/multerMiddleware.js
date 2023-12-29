// middlewares/multerMiddleware.js
const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
      // Check file types, etc. (optional)
      cb(null, true);
  }
}).any(); // Use .any() to handle both single and multiple files

// Middleware function to handle the file uploads
const handleFileUploads = (req, res, next) => {
  upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
          // A multer error occurred (e.g., file size exceeded)
          return res.status(400).json({ error: 'File upload error' });
      } else if (err) {
          // An unknown error occurred
          return res.status(500).json({ error: 'Internal server error' });
      }
      // Files were uploaded successfully
      next();
  });
};

module.exports = handleFileUploads;