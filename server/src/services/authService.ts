import jwt from "jsonwebtoken"
import User from "../models/User"

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error("Invalid credentials")
  }

  const isMatch = await user.comparePassword(password)
  if (!isMatch) {
    throw new Error("Invalid credentials")
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  })

  return { token, user: { id: user._id, name: user.name, email: user.email, role: user.role } }
}

export const registerUser = async (name: string, email: string, password: string, role: string, school: string) => {
  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw new Error("User already exists")
  }

  const user = new User({ name, email, password, role, school })
  await user.save()

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  })

  return { token, user: { id: user._id, name: user.name, email: user.email, role: user.role } }
}

