import express from "express";
import { protect } from "../middleware/middleware.js";
import {
  createReviewShop,
  deleteReviewShop,
  editReviewShop,
  getAllReviewShop,
  getReviewShop,
} from "../controller/reviewShop.js";

const router = express.Router();

router.use(protect);

router.route("/").get(getAllReviewShop).post(createReviewShop);
router
  .route("/:id")
  .get(getReviewShop)
  .put(editReviewShop)
  .delete(deleteReviewShop);

export default router;
