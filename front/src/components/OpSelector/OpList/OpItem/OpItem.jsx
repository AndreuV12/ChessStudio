import "./OpItem.css"
import initial_p from "../../../../helpers/initial_pos"

import Board from "../../../Board/Board"
import OpItemBar from "./OpItemBar/OpItemBar"

export default function OpItem({opening_id, opening_name, shown_pos = initial_p, onBoardClick, onDeleteClick, onEditSumbit}){
    let handleBoardClick = () => {
        if (onBoardClick) onBoardClick(opening_id)
    }
    let handleEditSumbit = (name) => {
        if (onEditSumbit) onEditSumbit(opening_id, name)
    }
    let handleDeleteClick = () => {
        if (onDeleteClick) onDeleteClick(opening_id)
    }

    return (
        <div className="OpItem">  
            <OpItemBar opening_name={opening_name} onEditSumbit={handleEditSumbit} onDeleteClick={handleDeleteClick}/>
            <Board pieces={shown_pos} onClick={handleBoardClick}/>
        </div>
    )
}