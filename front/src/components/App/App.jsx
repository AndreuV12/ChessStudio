import "./App.css"
import {Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"

import OpSelector from "../OpSelector/OpSelector"
import OpeningEditor from "../OpeningEditor/OpeningEditor"
import Login from "../UI/Login/Login"

import { getUsername } from "../../helpers/apiCalls"
import { useNavigate } from "react-router-dom"

const App = () => {
    let [ username, setUsername ] = useState(false)
    console.log("render App")
    const navigate = useNavigate()

    useEffect( () => {
        getUsername()
        .then( (username) => {
            setUsername( username )
            console.log(username)
        } )
        .catch((err)=>{
            console.log(err)
            navigate("/login")
        })
    }, [])

    
    return (
       
        <div className="App">  
            <Routes>
                <Route path='/' element = {
                    <OpSelector username={username}/>
                }
                />

                <Route path='/login' element = {
                    <Login/>
                }
                />

                <Route path='/openings/:opening_id' element = {
                    <OpeningEditor/>
                }/>
            </Routes>
        </div>
    )
}

export default App