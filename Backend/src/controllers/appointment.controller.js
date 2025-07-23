import { Appointment } from "../models/appointment.model.js";
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createAppointment = asyncHandler(async (req, res) => {
    const {
      name,
      phone,
      service,
      date,
      time
    } = req.body;

    if(
      !name ||
      !phone ||
      !service ||
      !date ||
      !time
    ) {
      throw new ApiError(400, "All fields are required");
    }

    try {
    // Save the appointment to DB
    const appointment = await Appointment.create({
      name,
      phone,
      service,
      date,
      time
    });

    return res.status(201).json(
      new ApiResponse(201, appointment, "Appointment created successfully")
    );
  } catch (error) {
    throw new ApiError(500, `Failed to create appointment: ${error.message}`);
  }
});

export {createAppointment};
