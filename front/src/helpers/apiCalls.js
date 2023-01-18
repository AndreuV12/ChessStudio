import axios from "axios"
import initial_pos from "./initial_pos"

let getOpeningById = (opening_id) => (
    axios.get('http://localhost:3030/openings/get/'+opening_id)
    .then((res)=>(res.data))
)

let getOpenings = async () => (
    axios.get('http://localhost:3030/openings/list')
    .then( ({data}) => data )
)

let addOpening = (name = "New Empty Opening") => (
    axios.post('http://localhost:3030/openings/add',{
        name,
        shown_pos: initial_pos
    })
)

let removeOpening = (opening_id) => (
    axios.post('http://localhost:3030/openings/delete', {
        opening_id 
    })
)

let updateOpeningName = (opening_id, name) => (
        axios.post('http://localhost:3030/openings/update/name', {
        opening_id,
        name
    })
)


let addMoveToOpening = (opening_id, path, move, move_name ) => (
    axios.post('http://localhost:3030/openings/addMove', {
        opening_id,
        path,
        move,
        move_name: JSON.stringify(move)
    })
)

export { getOpeningById, getOpenings, addOpening, removeOpening, updateOpeningName, addMoveToOpening }