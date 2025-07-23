import Router from "express";
import { createAppointment } from "../controllers/appointment.controller.js";

const router = Router();

router
  .route("/")
  .post(
    createAppointment
  );

export default router;
