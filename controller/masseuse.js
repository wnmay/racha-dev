import prisma from "../prismaClient.js";

export async function getAllMasseuses(req, res, next) {
  try {
    const masseuses = await prisma.masseuse.findMany();

    return res.status(200).json({
      success: true,
      masseuses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getMasseuse(req, res, next) {
  const masseuseId = parseInt(req.params.id, 10);

  try {
    const masseuse = await prisma.masseuse.findUnique({
      where: { id: masseuseId },
    });

    if (!masseuse) {
      return res.status(404).json({
        success: false,
        message: `No masseuse with the id of ${masseuseId}`,
      });
    }

    return res.status(200).json({
      success: true,
      masseuse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
