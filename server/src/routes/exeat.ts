import express from "express"
import ExeatRequest from "../models/ExeatRequest"
import { authMiddleware } from "../middleware/auth"

const router = express.Router()

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { student, reason, startDate, endDate, isEmergency } = req.body
    const exeatRequest = new ExeatRequest({
      student,
      reason,
      startDate,
      endDate,
      isEmergency,
    })
    await exeatRequest.save()
    res.status(201).json(exeatRequest)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

router.get("/", authMiddleware, async (req, res) => {
  try {
    const exeatRequests = await ExeatRequest.find().populate("student")
    res.json(exeatRequests)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

router.put("/:id/approve", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params
    const { role } = req.user

    const exeatRequest = await ExeatRequest.findById(id)
    if (!exeatRequest) {
      return res.status(404).json({ message: "Exeat request not found" })
    }

    switch (role) {
      case "housemaster":
        exeatRequest.housemasterApproval = true
        break
      case "parent":
        exeatRequest.parentApproval = true
        break
      case "seniorHousemaster":
        exeatRequest.seniorHousemasterApproval = true
        break
      default:
        return res.status(403).json({ message: "Unauthorized" })
    }

    if (exeatRequest.housemasterApproval && exeatRequest.parentApproval && exeatRequest.seniorHousemasterApproval) {
      exeatRequest.status = "approved"
    }

    await exeatRequest.save()
    res.json(exeatRequest)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

export default router

