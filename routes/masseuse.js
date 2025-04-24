import express from "express";
import { getAllMasseuses, getMasseuse } from "../controller/masseuse.js";

const router = express.Router();

router.route("/").get(getAllMasseuses);
router.route("/:id").get(getMasseuse);
export default router;
