import morgan from "morgan";
import cors from "cors";
import  express  from "express";
import rateLimit from 'express-rate-limit';
import app from "./src/Routes/app";
import cookieParser from "cookie-parser";


const PORT = 3001

const server = express()

server.use(cors({
  origin: ['http://localhost:5173'], 
  credentials: true,
}))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 1000, // Limite de 1000 requisições por IP por janela de 15 minutos
  message: 'Muitas requisições deste IP, tente novamente mais tarde.'
})

server.use(limiter)
app.use(cookieParser())
server.use(express.json())
server.use(morgan("dev"))
server.use(app)


server.listen(PORT , ()  => {
  console.log(`servidor rodando na porta ${PORT}`)

}).on("error", (err) => {
  console.error(err);
  });