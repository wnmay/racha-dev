import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";

export async function register(req, res, next) {
  const { name, tel, email, password, role } = req.body;
  const salt = await bcryptjs.genSalt();
  const hashedPassword = await bcryptjs.hash(password, salt);

  try {
    const exist = await prisma.user.findUnique({
      where: { email },
    });

    if (exist) {
      return res.status(401).json({
        success: false,
        message: "Email not available",
      });
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        tel: tel,
        email: email,
        password: hashedPassword,
        role: role,
      },
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Token created:", token);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 3600000,
      })
      .json({
        success: true,
        userId: user.id,
      });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({
      success: false,
      message: "Registration error",
    });
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Token created:", token);

    return res.status(200).cookie("token", token).json({
      success: true,
      userId: user.id,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Login error",
    });
  }
}
