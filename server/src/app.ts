import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import authRoutes from "./routes/auth"
import exeatRoutes from "./routes/exeat"
import userRoutes from "./routes/user"
import { errorHandler } from "./middleware/errorHandler"

const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/exeat", exeatRoutes)
app.use("/api/user", userRoutes)

// Error handling
app.use(errorHandler)

export default app

