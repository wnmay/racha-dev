import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import reviewShop from "./routes/reviewShop.js";
import reviewMasseuse from "./routes/reviewMasseuse.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/auth", auth);
app.use("/reviewShop", reviewShop);
app.use("/reviewMasseuse", reviewMasseuse);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
