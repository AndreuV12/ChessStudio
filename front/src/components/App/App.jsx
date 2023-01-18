import "./App.css"
import {Routes, Route } from 'react-router-dom'

import OpSelector from "../OpSelector/OpSelector"
import OpeningEditor from "../OpeningEditor/OpeningEditor"
const App = () => (
    
    <div className="App">  
        <Routes>
            <Route path='/' element = {
                <OpSelector/>
            }
            />

            <Route path='/openings/:opening_id' element = {
                <OpeningEditor/>
            }/>
        </Routes>
    </div>
)

export default App