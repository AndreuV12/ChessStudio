import { useNavigate } from "react-router-dom"

import "./OpList.css"
import OpItem from "./OpItem/OpItem"

export default function OpList({openingList, onRemoveClick, onEditSubmit }){
    const navigate = useNavigate()

    let handleItemClick = (opening_id) => {
        navigate("/openings/"+opening_id)
    }

    let handleRemoveClick = (opening_id) => {
        console.log(opening_id)
        if (onRemoveClick) onRemoveClick(opening_id)
    }

    let handleEditSubmit = (opening_id, name) => {
        if (onEditSubmit) onEditSubmit(opening_id, name)
    }

    return (
        <div className="OpList">
            {openingList.map(({opening_id, name, shown_pos})=>(
                <OpItem 
                    key={opening_id} 
                    opening_id={opening_id} 
                    opening_name={name}
                    shown_pos={shown_pos}
                    onBoardClick={handleItemClick}
                    onDeleteClick={handleRemoveClick}
                    onEditSumbit={handleEditSubmit}
                />
            ))}
        </div>
    )
}