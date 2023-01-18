import "./Square.css"

import P from "../../../../img/estil1/P.png"
import p from "../../../../img/estil1/p.png"
import N from "../../../../img/estil1/N.png"
import n from "../../../../img/estil1/n.png"
import B from "../../../../img/estil1/B.png"
import b from "../../../../img/estil1/b.png"
import R from "../../../../img/estil1/R.png"
import r from "../../../../img/estil1/r.png"
import Q from "../../../../img/estil1/Q.png"
import q from "../../../../img/estil1/q.png"
import K from "../../../../img/estil1/K.png"
import k from "../../../../img/estil1/k.png"
import S from "../../../../img/estil1/S.png"

const Square = ( {coor, piece} ) => {

    let getImg = (piece) => {
        if (piece == "P") return P
        else if (piece == "p") return p
        else if (piece == "N") return N
        else if (piece == "n") return n
        else if (piece == "B") return B
        else if (piece == "b") return b
        else if (piece == "R") return R
        else if (piece == "r") return r
        else if (piece == "Q") return Q
        else if (piece == "q") return q
        else if (piece == "K") return K 
        else if (piece == "k") return k
        else return S
    }

    let img = getImg(piece)

    return (
        <img className = "Square" draggable="false" src={img} coor={coor}/>
    )
}

export default Square