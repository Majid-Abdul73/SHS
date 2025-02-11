import mongoose, { type Document, Schema } from "mongoose"

export interface IExeatRequest extends Document {
  student: mongoose.Types.ObjectId
  reason: string
  startDate: Date
  endDate: Date
  status: "pending" | "approved" | "rejected"
  housemasterApproval: boolean
  parentApproval: boolean
  seniorHousemasterApproval: boolean
  isEmergency: boolean
}

const ExeatRequestSchema: Schema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    reason: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    housemasterApproval: { type: Boolean, default: false },
    parentApproval: { type: Boolean, default: false },
    seniorHousemasterApproval: { type: Boolean, default: false },
    isEmergency: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export default mongoose.model<IExeatRequest>("ExeatRequest", ExeatRequestSchema)

