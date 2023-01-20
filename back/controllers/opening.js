import Opening from "../models/opening.js"
import jsChessEngine from 'js-chess-engine'
const { Game, move, status, moves, aiMove, getFen } = jsChessEngine

let addOpening = async (name, shown_pos, data, email) => {
    let opening = new Opening({
        name,
        shown_pos,
        data,
        email
    })    
    return await opening.save().catch((err) => console.log(err))
}

let deleteOpening = async (opening_id) => {
    return await Opening.findByIdAndRemove(opening_id).catch(()=>(null))
}

let updateOpeningName = async (opening_id, name) => {
    return await Opening.findByIdAndUpdate( opening_id, { name }, {new: true} )
}

let getOpening = async (opening_id) => {
    return await Opening.findById(opening_id).catch(()=>null)
}

let getUserOpenings = async (email) => {
    return await Opening.find({email})
}

let addMove = async (move_name, {from, to}, opening_id, path) => {
    let opening = await getOpening(opening_id) 
    if (!opening) return false

    let newMove = { from, to }
    let data = opening.data
    let newConfig

    try {
        for (let i = 0; i<(path.length); i++){
            let pathMove = path[i]
            data = data.cont[pathMove]
        }
        newConfig = move(JSON.parse(JSON.stringify(data.config)), from, to)
    }
    catch(err){
        console.log(err)
        return false
    }
    
    if (!data.cont) data.cont = {}
    data.cont[move_name] = { move: newMove, config: newConfig, cont: {}}

    return await Opening.findByIdAndUpdate( opening_id, { data: opening.data }, {new: true} )
}

export { addOpening, deleteOpening, getOpening, getUserOpenings, addMove, updateOpeningName }