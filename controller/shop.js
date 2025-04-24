import prisma from "../prismaClient.js";

export async function getAllShops(req, res, next) {
  try {
    const shops = await prisma.shop.findMany();

    return res.status(200).json({
      success: true,
      shops,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getShop(req, res, next) {
  const shopId = parseInt(req.params.id, 10);

  try {
    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
    });

    if (!shop) {
      return res.status(404).json({
        success: false,
        message: `No shop with the id of ${shopId}`,
      });
    }

    return res.status(200).json({
      success: true,
      shop,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
