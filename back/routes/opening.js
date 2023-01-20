import { Router } from "express"
import { addOpening, deleteOpening, getOpening, getUserOpenings, addMove, updateOpeningName } from "../controllers/opening.js"
import initial_config from "../utils/data/initial_config.js"
const opening_router = Router()

opening_router.post('/add', async (req, res) => {
    let {name, shown_pos} = req.body  

    let empty_data = {
        config: initial_config,
        cont: {}
    }

    let opening = await addOpening( name, shown_pos, empty_data, req.session.user.email )

    if (!opening) return res.sendStatus(400)

    return res.json(opening)
})

opening_router.post('/delete', async (req, res) => {
    let opening = await deleteOpening(req.body.opening_id)
    if (opening)
        return res.json(opening)
    else
        return res.sendStatus(404)
})

opening_router.post('/update/name', async (req, res) => {
    let opening = await updateOpeningName(req.body.opening_id, req.body.name)
    if (opening)
        return res.json(opening)
    else
        return res.sendStatus(404)
})

opening_router.get('/get/:opening_id', async (req, res) => {
    res.json( await getOpening(req.params.opening_id) )
})

opening_router.get('/list', async (req, res) => {
    let openings = await getUserOpenings(req.session.user.email)
    if (!openings.length)
        return res.status(204)
    return res.json(openings)
})

opening_router.post('/addMove', async (req, res) => {
    let { move_name, move, opening_id, path} = req.body  

    return res.json( await addMove(move_name, move, opening_id, path))
})

export default opening_router
