import express from 'express';
import { getReservations, getAllReservations, getReservation, createReservation, editReservation, deleteReservation } from '../controller/reserve.js';
import { protect, authorize } from '../middleware/middleware.js';

const router = express.Router();

router.use(protect);

router.route('/').get(getReservations).post(createReservation);
router.route('/admin').get(authorize, getAllReservations);
router.route('/:id').get(getReservation).put(editReservation).delete(deleteReservation);


export default router;
