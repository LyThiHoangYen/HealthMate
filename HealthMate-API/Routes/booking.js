import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import { getCheckoutSession } from "../Controllers/bookingController.js";

/**
 * @swagger
 * /booking/checkout-session/{doctorId}:
 *   post:
 *     summary: Create a payment session for an appointment
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: doctorId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment session created successfully
 *     security:
 *       - bearerAuth: []
 */

const router = express.Router();

router.post("/checkout-session/:doctorId", authenticate, getCheckoutSession);

export default router;
