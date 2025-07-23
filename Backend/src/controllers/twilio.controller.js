import { sendSMS } from "../services/twilio.service.js";

export const notifyOnNewAppointment = async(name, date, phone, service) => {
  try {
    await sendSMS("+9172358 78877", `New Appointment available: Name: ${name}, date: ${date}, Mobile Number: ${phone}, Service: ${service} `)
  } catch (error) {
    console.log("Error sending new item notification: ", error)
  }
}