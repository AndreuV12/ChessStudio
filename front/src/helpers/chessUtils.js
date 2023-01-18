import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine'

let checkMove = (Opening, path, checked_move, move_name) => {
    let opening = JSON.parse(JSON.stringify(Opening))
    let data = opening.data
    if (!data) return false
    for (let i = 0; i< path.length; i++){
        data = data.cont[path[i]]
    }
    console.log(data.config)
    if (data.cont){
        if (data.cont[move_name]){
            console.log("move existing")
            return 0
        }
    }
    try{
        let newConfig = move(JSON.parse(JSON.stringify(data.config)), checked_move.from, checked_move.to)
        if (!data.cont) data.cont = {}
        data.cont[move_name] = { move: checked_move, config: newConfig }
        return opening
    }
    catch{
        return false
    }
    
}

let getMoveName = (move, config) => {
    console.log(move, config)

}

export {checkMove, getMoveName }