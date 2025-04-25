import express from "express";
import { protect } from "../middleware/middleware.js";
import { getAllMasseuses, getMasseuse } from "../controller/masseuse.js";

const router = express.Router();
router.use(protect);
router.route("/").get(getAllMasseuses);
router.route("/:id").get(getMasseuse);
export default router;
