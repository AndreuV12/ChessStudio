import express from 'express'
import cors from 'cors'
import session from 'express-session'
import googleRouter from './routes/google_oauth.js'
import openingsRouter from './routes/opening.js'
import userRouter from './routes/user.js'
import { PORT } from './config/config.js'
import { addSession, checkAuth } from './utils/middlewares.js'
import './config/mongo.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', 1)

app.use(session({
    secret: "pwd",
    name: "session-cookie",
    cookie: {
        maxAge: 60*60*1000,
        httpOnly: false,
        domain: "localhost"
    },
    resave: false,
    saveUninitialized: false
}))

// app.use(addCredentials)

// ROUTES

app.use(addSession)

app.use('/oauth/google/', googleRouter)
app.use('/openings/', openingsRouter)
app.use('/user/', userRouter)

app.get('/', checkAuth, async (req, res) => {
    return res.json(req.session.user)
})



app.listen(PORT,() => console.log(`Server App listening on ${PORT}`))
