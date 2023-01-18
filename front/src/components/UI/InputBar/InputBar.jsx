import { useState } from "react"
import "./InputBar.css"

import SubmitIcon from "../../../../img/icons/submit.png"

export default function InputBar({label, placeholder, onSubmit}){
    let [input, setInput] = useState("")

    let handleChange = (event) => {
        setInput(event.target.value)
    }

    let handleSubmit = (event) =>{
        if (onSubmit) onSubmit(input)
  
    }

    return (
        <div className = "InputBar">
            <input type="text" placeholder={placeholder} onChange={handleChange}/>
            <img className="SubmitButton" src={SubmitIcon} onClick={handleSubmit}/> 
        </div>
    )
}