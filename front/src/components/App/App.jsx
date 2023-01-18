import "./App.css"
import {Routes, Route } from 'react-router-dom'
import initialOp from "../../helpers/initialOp"
import Navbar from "../UI/Navbar/Navbar"
import InputBar from "../UI/InputBar/InputBar"
import OpSelector from "../OpSelector/OpSelector"
import OpeningEditor from "../OpeningEditor/OpeningEditor"
const App = () => (
    
    <div className="App">  
        {/* <Navbar links = {[
            {   link: "/",
                name: "HOME" },
            {   link: "/openings",
                name: "APERTURES" },
            {   link: "/board",
                name: "TABLERO" },
        ]}/> */}
        
        <Routes>
            <Route path='/' element = {
                <InputBar placeholder={"Filter by name"} onSubmit={(input)=>{console.log(input)}}></InputBar>    
            }
            />

            <Route path='/openings' element = {
                <OpSelector/>
            }/>

            <Route path='/openings/:opening_id' element = {
                <OpeningEditor/>
            }/>

            <Route path='/openings/edit/' element = {
                <h1>OpeningEditor</h1>
            }/>

        </Routes>
    </div>
)

export default App