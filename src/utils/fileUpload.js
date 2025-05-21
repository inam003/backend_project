import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload file on cloudinary
const uploadFileOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully", uploadResult.url);
    return uploadResult;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Delete the file from the local system
    console.log("File upload failed", error);
    return null;
  }
};

export { uploadFileOnCloudinary };
