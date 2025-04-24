import prisma from "../prismaClient.js";

export async function getUserReservations(req, res, next) {
  const userId = req.user.id;

  try {
    const reservations = await prisma.reservation.findMany({
      where: { userId },
    });

    return res.status(200).json({
      success: true,
      reservations,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
}

export async function getReservation(req, res, next) {
  const userId = req.user.id;

  const reservationId = parseInt(req.params.id, 10);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    const reservation = await prisma.reservation.findUnique({
      where: { id: reservationId },
    });

    if (user.role != "ADMIN" && user.id != reservation.userId) {
      return res.status(403).json({
        success: false,
        message: "User is not authorized",
      });
    }

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: `No reservation with the id of ${reservationId}`,
      });
    }

    return res.status(200).json({
      success: true,
      reservation,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
}

export async function getAllReservations(req, res, next) {
  try {
    const reservations = await prisma.reservation.findMany();

    return res.status(200).json({
      success: true,
      reservations,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
}

export async function createReservation(req, res, next) {
  const userId = req.user.id;
  const userRole = req.user.role;
  const { reservationTime, shopId, masseuseId } = req.body;
  if (userRole === "ADMIN") {
    return res.status(403).json({
      success: false,
      message: "Admins are not allowed to create reservations.",
    });
  }

  try {
    const reservationCount = await prisma.reservation.count({
      where: {
        userId,
      },
    });

    if (reservationCount >= 3) {
      return res.status(403).json({
        success: false,
        message: "You can only make up to 3 reservations.",
      });
    }

    const created = await prisma.reservation.create({
      data: {
        reservationTime,
        userId,
        shopId,
        masseuseId,
      },
    });

    return res.status(200).json({
      success: true,
      created,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
}

export async function editReservation(req, res, next) {
  const userId = req.user.id;
  const { reservationTime, masseuseId } = req.body;
  const reservationId = parseInt(req.params.id, 10);

  const dataToUpdate = {};
  if (reservationTime !== undefined) {
    dataToUpdate.reservationTime = reservationTime;
  }
  if (masseuseId !== undefined) {
    dataToUpdate.masseuseId = masseuseId;
  }
  if (Object.keys(dataToUpdate).length === 0) {
    return res.status(500).json({
      success: false,
      message: "No update fields provided",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    const reservation = await prisma.reservation.findUnique({
      where: { id: reservationId },
    });

    if (user.role != "ADMIN" && userId != reservation.userId) {
      return res.status(403).json({
        success: true,
        message: "User is not authorized",
      });
    }

    const updated = await prisma.reservation.update({
      where: { id: reservationId },
      data: dataToUpdate,
    });

    return res.status(200).json({
      success: true,
      updated,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
}

export async function deleteReservation(req, res, next) {
  const userId = req.user.id;
  const reservationId = parseInt(req.params.id, 10);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    const reservation = await prisma.reservation.findUnique({
      where: { id: reservationId },
    });

    if (user.role != "ADMIN" && userId != reservation.userId) {
      return res.status(403).json({
        success: false,
        message: "User is not authorized",
      });
    }

    const deleted = await prisma.reservation.delete({
      where: { id: reservationId },
    });

    return res.status(200).json({
      success: true,
      deleted,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
}
