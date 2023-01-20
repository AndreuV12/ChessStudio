import { Router } from "express"
const user_router = Router()

user_router.get('/', async (req, res) => {
    return res.json(req.session.user)
})

user_router.get('/username', async (req, res) => {
    return res.json(req.session.user.username)
})

export default user_router