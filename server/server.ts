import { config } from "dotenv"
config()

import fastify from "fastify"
import cors from "@fastify/cors"
import { userRoutes } from "./routes/users"

const app = fastify({ logger: true })
app.register(cors, { origin: (origin, cb) => {
    // Check if the origin is allowed
    if (origin === 'http://127.0.0.1:5173' || origin === 'http://localhost:5173' || process.env.HEROKU_HOST) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'), false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}
)
app.register(userRoutes);

app.listen({ port: parseInt(process.env.PORT!) })
