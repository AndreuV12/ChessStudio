import express from 'express'
import cors from 'cors'
import session from 'express-session'

import googleRouter from './routes/google_oauth.js'
import openingsRouter from './routes/opening.js'
import userRouter from './routes/user.js'

import { PORT } from './config/config.js'
import { checkAuth } from './utils/middlewares.js'
import './config/mongo.js'

const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', 1)

app.use(session({
    secret: "pwd",
    name: "session-cookie",
    cookie: {
        maxAge: 60*60*1000,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false
}))

// ROUTES
app.use('/oauth/google/', googleRouter)
app.use('/openings/', checkAuth, openingsRouter)
app.use('/user/', checkAuth, userRouter)

app.get("/", (req,res)=> {
    res.json("OK")
})

app.listen(PORT,() => console.log(`Server App listening on ${PORT}`))
