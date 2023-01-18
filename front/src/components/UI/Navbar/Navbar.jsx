import "./Navbar.css"
import { useNavigate } from "react-router-dom"
import Login from "./Login/Login"
export default function Navbar({links}){
    const navigate = useNavigate()
    return ( 
    <nav className="Navbar">
        <div className="Nav-LeftItems">
            {links.map((el) => (<div className="Nav-link" key={el.link} onClick={() => {navigate(el.link)}}> {el.name}</div>))}
        </div>
        <div className="Nav-RightItems">
            <Login/>     
        </div>
    </nav>
    )
}
