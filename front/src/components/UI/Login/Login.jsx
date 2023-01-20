import "./Login.css"
import googleLoginIcon from "../../../../img/icons/googleLogin.png"
import { redirect } from "react-router-dom"
export default function Login(){


return(
    <div className="Login">
        <div> Login required</div>
        <a href={"http://localhost:3030/oauth/google"}>
            <img src={googleLoginIcon} ></img>
        </a>
    </div>
    )
}