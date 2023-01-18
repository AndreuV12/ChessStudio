import { useState } from "react"
import "./OpItemBar.css"

import InputBar from "../../../../UI/InputBar/InputBar"
import EditIcon from   "../../../../../../img/icons/edit.png"
import DeleteIcon from "../../../../../../img/icons/delete.png"
import SubmitIcon from "../../../../../../img/icons/submit.png"

export default function OpItemBar({opening_name, onDeleteClick, onEditSumbit}){
    let [editing, setEditing] = useState(false) 

    let handleEditClick = () => setEditing(!editing)

    let handleDeleteClick = () => {
        if (onDeleteClick) onDeleteClick()
    }

    let handleSubmit = (input) =>{
        setEditing(false)
        if (onEditSumbit && input) onEditSumbit(input)
    }

    return (
        <div className="OpItemBar">
            {
            editing ? 
  
            <InputBar placeholder={"New Opening Name"} onSubmit={handleSubmit}/>
            :
            <div className = "OpItemBarText">
                {opening_name}
            </div>
            }
            
            <div className="OpItemBarButtons">
                <img className="EditButton" src={EditIcon} onClick={handleEditClick}/>
                <img className="DeleteButton" src={DeleteIcon} onClick={handleDeleteClick}/>
            </div>
        </div>
    )
}