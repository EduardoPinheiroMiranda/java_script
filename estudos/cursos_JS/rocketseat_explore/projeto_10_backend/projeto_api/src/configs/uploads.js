const path = require("path")
const multer  = require("multer") //tem que ser intalado via npm
const crypto = require("crypto")

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
const UPLOAD_FOLDER = path.resolve(__dirname, "uploads")

const MULTER = {
    storege: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(req, file, callback){
            const fileHash = crypto.randomBytes(10).toString("hex")
            const fileName = `${fileHash}-${file.originalname}`

            return callback(null, fileName)
        }
    })
}

module.export = {
    TMP_FOLDER,
    UPLOAD_FOLDER,
    MULTER
}