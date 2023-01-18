import "./ButtonBar.css"

export default function ButtonBar({children}){
    return ( 
    <nav className="ButtonBar"> 
        {children}
    </nav>
    )
}