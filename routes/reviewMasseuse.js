import express from "express";
import { protect } from "../middleware/middleware.js";

import {
  createReviewMasseuse,
  deleteReviewMasseuse,
  editReviewMasseuse,
  getAllReviewMasseuse,
  getReviewMasseuse,
} from "../controller/reviewMasseuse.js";

const router = express.Router();

router.use(protect);

router.route("/").get(getAllReviewMasseuse).post(createReviewMasseuse);
router
  .route("/:id")
  .get(getReviewMasseuse)
  .put(editReviewMasseuse)
  .delete(deleteReviewMasseuse);

export default router;
