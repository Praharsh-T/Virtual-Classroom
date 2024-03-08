import fs from "fs";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import express from "express";
import { validateToken } from "../../middleware/authToken.js";
import { uploadFileToClassroom } from "../scripts/classroomQuery.js";
import { getFileFromClassRoom } from "../scripts/file.js";

const router = express.Router();
router.post(
  "/uploadFile",
  validateToken,
  upload.single("file"),
  async (req, res) => {
    const fileContent = fs.readFileSync(req.file.path);
    // console.log(fileContent);
    const tableName = "FILE" + req.body.classroomName + req.body.classroomid;
    const uploadStatus = await uploadFileToClassroom(
      tableName,
      req.body.fileName,
      req.body.fileType,
      req.body.fileDescription,
      fileContent
    );
    fs.unlinkSync(req.file.path);
    res.json({ success: uploadStatus });
  }
);

router.post("/getFile", validateToken, async (req, res) => {
  const tableName = "FILE" + req.body.classroomName + req.body.classroomid;
  const fileid = req.body.fileid;
  const fileDetails = await getFileFromClassRoom(tableName, fileid);
  res.json({ success: true, fileDetails });
});

export default router;
