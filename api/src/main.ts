import express from 'express'
import connectDB from './config/database.config';
import dotenv from 'dotenv'
import PostController from './ressources/post/post.controller';
import { ExceptionsHandler } from './middlewares/exceptions.handler';
import CategoryController from './ressources/category/category.controller';
import TagController from './ressources/tag/tag.controller';
dotenv.config()
connectDB

const PORT = process.env.API_PORT || 8000
const prefixURL = process.env.API_PREFIX || "/api"

const app = express()

app.use(express.json())

app.use(prefixURL, PostController)
app.use(prefixURL, CategoryController)
app.use(prefixURL, TagController)

app.use(ExceptionsHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))