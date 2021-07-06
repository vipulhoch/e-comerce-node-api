const sharp = require('sharp');
// --------Upload Image -------------
const uploadImages= async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}

// --------Delete Image -------------
const deleteImage = async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
}

//--------view Image -------------
const viewImage = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user || !user.avatar) {
            throw new Error()
        }
        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
}

module.exports = {deleteImage,viewImage,uploadImages};