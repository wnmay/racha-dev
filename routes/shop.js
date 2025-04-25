import express from "express";
import { protect } from "../middleware/middleware.js";
import { getAllShops, getShop } from "../controller/shop.js";

const router = express.Router();
router.use(protect);

router.route("/").get(getAllShops);
router.route("/:id").get(getShop);
export default router;
