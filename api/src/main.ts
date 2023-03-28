import express from 'express'
import connectDB from './config/database.config';
import dotenv from 'dotenv'
import PostController from './ressources/post/post.controller';
dotenv.config()
connectDB

const PORT = process.env.API_PORT || 8000
const prefixURL = process.env.API_PREFIX || "/api"

const app = express()

app.use(express.json())

app.use(prefixURL, PostController)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))