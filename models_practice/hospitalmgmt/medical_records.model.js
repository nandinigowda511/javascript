import mongoose from "mongoose"

const medicalrecordsSchema = new mongoose.Schema()

export const Medirecords = mongoose.model("Medirecords",medicalrecordsSchema)
