import { s3 } from "./awsConfig.js";
import multer from "multer";
import multerS3 from "multer-s3"
import { AWS_BUCKET_NAME } from "./serverConfig.js";


export const uploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function(req,file,cb){
            console.log(file);
            const suffix = Date.now() + " " + Math.round(Math.random()*1e9);

            cb(null,file.fieldname + "-" + suffix+ "." + file.mimetype.split('/')[1]);
        }
    })
})