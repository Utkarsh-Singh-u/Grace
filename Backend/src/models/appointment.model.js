import mongoose, { Schema } from "mongoose";
import { notifyOnNewAppointment } from "../controllers/twilio.controller.js";

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return /^[6-9]\d{9}$/.test(value.toString());
        },
        message: (props) => `${props.value} is not a valid mobile number!`,
      },
  },
  service: {
    type: String,
    enum: ["hair", "individual"],
    required: true,
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  time: String,
});

appointmentSchema.post("save", async function (doc, next) {

  notifyOnNewAppointment(doc.name, doc.date, doc.phone, doc.service)
  next();

});

export const Appointment = mongoose.model("Appointment",appointmentSchema)