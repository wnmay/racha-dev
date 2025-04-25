import prisma from "../prismaClient.js";

export async function getAllReviewMasseuse(req, res, next) {
  try {
    const reviews = await prisma.reviewMasseuse.findMany();
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

export async function getReviewMasseuse(req, res, next) {
  const reviewMasseuseId = parseInt(req.params.id);
  try {
    const review = await prisma.reviewMasseuse.findUnique({
      where: { id: reviewMasseuseId },
    });
    if (!review) {
      return res.status(404).json({
        success: false,
        message: `No masseuse review with the id of ${reviewMasseuseId}`,
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

export async function createReviewMasseuse(req, res, next) {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: user not authenticated",
      });
    }

    const { masseuseId, rating, comment } = req.body;
    const masseuse = await prisma.masseuse.findUnique({
      where: { id: masseuseId },
    });
    if (!masseuse) {
      return res.status(404).json({
        success: false,
        message: "Masseuse not found",
      });
    }

    const hasReservation = await prisma.reservation.findFirst({
      where: {
        userId,
        masseuseId,
      },
    });

    if (!hasReservation) {
      return res.status(403).json({
        success: false,
        message: "You must have a reservation before reviewing this masseuse",
      });
    }

    const existingReview = await prisma.reviewMasseuse.findFirst({
      where: { userId, masseuseId },
    });

    if (existingReview) {
      const updated = await prisma.reviewMasseuse.update({
        where: { id: existingReview.id },
        data: { rating, comment },
      });
      return res.status(200).json({
        success: true,
        reviewMasseuse: updated,
        updated: true,
      });
    }

    const reviewMasseuse = await prisma.reviewMasseuse.create({
      data: {
        rating,
        comment,
        userId,
        masseuseId,
      },
    });

    return res.status(200).json({
      success: true,
      reviewMasseuse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function editReviewMasseuse(req, res, next) {
  const userId = req.user.id;
  const { rating, comment } = req.body;
  const reviewMasseuseId = parseInt(req.params.id, 10);

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
    const review = await prisma.reviewMasseuse.findUnique({
      where: { id: reviewMasseuseId },
    });

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    if (userId !== review.userId) {
      return res.status(403).json({
        success: false,
        message: "User is not authorized",
      });
    }

    const updated = await prisma.reviewMasseuse.update({
      where: { id: reviewMasseuseId },
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

export async function deleteReviewMasseuse(req, res, next) {
  const userId = req.user.id;
  const reviewMasseuseId = parseInt(req.params.id, 10);

  try {
    const review = await prisma.reviewMasseuse.findUnique({
      where: { id: reviewMasseuseId },
    });

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    if (userId !== review.userId) {
      return res.status(403).json({
        success: false,
        message: "User is not authorized",
      });
    }

    const deleted = await prisma.reviewMasseuse.delete({
      where: { id: reviewMasseuseId },
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
