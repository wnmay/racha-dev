import express from "express";
import { getAllShops, getShop } from "../controller/shop.js";

const router = express.Router();

router.route("/").get(getAllShops);
router.route("/:id").get(getShop);
export default router;
