import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./OpeningEditor.css"
import Board from "../Board/Board"
import Interface from "./Interface/Interface"

import initial_p from "../../helpers/initial_pos"
import { checkMove, getMoveName } from "../../helpers/chessUtils"
import { getOpeningById, addMoveToOpening } from "../../helpers/apiCalls"

export default function OpeningEditor(){
    let [opening, setOpening] = useState({cont: []})
    let [pos, setPos] = useState(initial_p)
    let [path, setPath] = useState([])
    let [moves, setMoves] = useState([])

    let { opening_id } = useParams()
    let move = {}

    useEffect(()=> { 
       getOpeningById(opening_id).then((opening)=>setOpening(opening))
    },[])

    let updateData = (opening, path) => {
        let data = opening.data
        if (!data) return false

        for (let i = 0; i< path.length; i++){
            data = data.cont[path[i]]
        }
        setPos( data.config.pieces )
        if (!data.cont) data.cont = {}
        setMoves( Object.keys(data.cont))
    }

    useEffect(() => {
        updateData(opening, path)
    },[opening, path])
    
    let handleSquareClick = (coor) => {
        if (!move.from) move.from = coor
        else {
            move.to = coor
            let result = checkMove(opening, path, move, JSON.stringify(move))

            if (result) {
                addMoveToOpening(opening_id, path, move, JSON.stringify(move))
                setOpening(result)
                setPath([...path, JSON.stringify(move)])
                move = {}
            }
            else if (result === 0) {
                setPath([...path, JSON.stringify(move)])
                move = {}
            }    
    
            else {
                move = {from: move.to, to: null} 
            }
            // getMoveName(opening)
        }
    }

    let handleMoveSelected = (move) => {
        if (move){
            setPath([...path, move])
        }
    }

    let handlePrev = () => {
        setPath(path.slice(0,-1))
    }
    
    return ( 

        <div className="OpeningEditor">
            <Board pieces={pos} onSquareClick={handleSquareClick}/>
            <Interface 
                moves={moves} 
                onMoveSelected={handleMoveSelected}
                onPrev={handlePrev}
            /> 
        </div>
    )     
}