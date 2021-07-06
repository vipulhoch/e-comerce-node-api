const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth.middleware');
const User = require('../models/user.models');
const fileUploadsController =require('../controller/fileUploads.controller.js');

const router = new express.Router();
const upload = multer({
    dist:'image',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'));
        }
        cb(undefined, true);
    }
})

router.post('/me/avatar', auth, upload.single('avatar'), fileUploadsController.uploadImages, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});
router.delete('/me/avatar', auth, fileUploadsController.deleteImage);
router.get('/:id/avatar', fileUploadsController.viewImage);
module.exports = router;


