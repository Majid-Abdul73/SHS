import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

interface DecodedToken {
  id: string
  role: string
}

declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "")

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" })
  }
}

