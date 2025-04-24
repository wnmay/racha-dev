import prisma from "../prismaClient.js";

export async function getAllReviewShop(req, res, next) {
  try {
    const reviews = await prisma.reviewShop.findMany();
    return res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getReviewShop(req, res, next) {
  const reviewShopId = parseInt(req.params.id);
  try {
    const review = await prisma.reviewShop.findUnique({
      where: { id: reviewShopId },
    });
    if (!review) {
      return res.status(404).json({
        success: false,
        message: `No review shop with the id of ${reviewShopId}`,
      });
    }
    return res.status(200).json({
      success: true,
      review,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function createReviewShop(req, res, next) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: user not authenticated",
      });
    }

    const { shopId, rating, comment } = req.body;
    if (!shopId) {
      return res.status(404).json({
        success: false,
        message: "Massage shop not found",
      });
    }

    const reviewShop = await prisma.reviewShop.create({
      data: {
        rating,
        comment,
        userId,
        shopId,
      },
    });

    return res.status(200).json({
      success: true,
      reviewShop,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
}

export async function editReviewShop(req, res, next) {
  const userId = req.user.id;
  const { rating, comment } = req.body;
  const reviewShopId = parseInt(req.params.id, 10);

  let updateData = {};
  if (rating !== undefined) updateData.rating = rating;
  if (comment !== undefined) updateData.comment = comment;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No update fields provided",
    });
  }

  try {
    const reviewShop = await prisma.reviewShop.findUnique({
      where: { id: reviewShopId },
    });

    if (!reviewShop) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    if (userId !== reviewShop.userId) {
      return res.status(403).json({
        success: false,
        message: "User is not authorized",
      });
    }

    const updated = await prisma.reviewShop.update({
      where: { id: reviewShopId },
      data: updateData,
    });

    return res.status(200).json({
      success: true,
      updated,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function deleteReviewShop(req, res, next) {
  const userId = req.user.id;
  const reviewShopId = parseInt(req.params.id, 10);

  try {
    const reviewShop = await prisma.reviewShop.findUnique({
      where: { id: reviewShopId },
    });

    if (!reviewShop) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    if (userId !== reviewShop.userId) {
      return res.status(403).json({
        success: false,
        message: "User is not authorized",
      });
    }

    const deleted = await prisma.reviewShop.delete({
      where: { id: reviewShopId },
    });

    return res.status(200).json({
      success: true,
      deleted,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
