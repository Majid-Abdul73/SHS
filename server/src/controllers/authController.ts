import type { Request, Response, NextFunction } from "express"
import { loginUser, registerUser } from "../services/authService"

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body
    const result = await loginUser(email, password)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, role, school } = req.body
    const result = await registerUser(name, email, password, role, school)
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

