import { Router } from "express"
const user_router = Router()

user_router.get('/', async (req, res) => {
    
    return res.json(req.session.user)
})

user_router.get('/get/:opening_id', async (req, res) => {
    res.json( await getOpening(req.params.opening_id) )
})

export default user_router