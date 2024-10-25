import { s3 } from "./awsConfig.js";
import multer from "multer";
import multerS3 from "multer-s3"
import { AWS_BUCKET_NAME } from "./serverConfig.js";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const uploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function(req,file,cb){
            if(!file){
                console.log(file);
                return cb(new Error("File not found! "));
            }
            if(!ACCEPTED_IMAGE_TYPES.includes(file.mimetype)){
                return cb(new Error("File type not Supported! "));
            }
            const suffix = Date.now() + " " + Math.round(Math.random()*1e9);

            cb(null,file.fieldname + "-" + suffix+ "." + file.mimetype.split('/')[1]);
        }
    })
})