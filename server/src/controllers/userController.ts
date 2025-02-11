import type { Request, Response, NextFunction } from "express"
import User from "../models/User"

export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export const updateUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email } = req.body
    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    user.name = name || user.name
    user.email = email || user.email

    await user.save()

    res.json({ message: "User profile updated successfully", user })
  } catch (error) {
    next(error)
  }
}

