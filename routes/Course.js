import express from "express";
const router = express.Router();

import {
  get,
  create,
  getCourseById,
  getCoursesByInstructorId,
  deleteCourse,
  uploadImage,
  deleteImage,
} from "../controller/course";

router.post("/create", create);
router.get("/:slug", get);

router.post("/upload-image", uploadImage);
router.post("/delete-image", deleteImage);

router.get("/course/:_id", getCourseById);
router.get("/courses/instructor", getCoursesByInstructorId);

router.delete("/:id", deleteCourse); // delete course (the _id of the request must be equal of the course.creator._id)

export default router;
