import { useEffect, useState } from "react"
import "./Login.css"

export default function Login({}){
    let [username, setUsername] = useState(false)

    // useEffect(() => {

    // }, [username])

    if (!username){
        return ( 
            <div className="Login">
                LOGIN
            </div>
        )
    }

    else{
        return (
            <div className="Login">
                {username}
            </div>
        )
    }
}
