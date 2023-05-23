import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/auth.js'

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DN_NAME = process.env.DN_NAME

//Middlewrs
app.use(cors())
app.use(express.json())

// router
app.search('/api/auth',)

async function start() {
     try{
          await mongoose.connect(
          'mongodb+srv://${DB_USER}:${DB_password}@cluster0.xewzjjd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority'
     )

     app.listen(PORT, () => console.log('Server started on port: ${PORT}'))
     } catch (error) {
          console.log(error)
     }
}
start()