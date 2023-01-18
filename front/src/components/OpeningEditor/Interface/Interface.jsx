import { useState, useEffect } from "react"
import "./Interface.css"

export default function Interface({moves =[], onMoveSelected, onPrev}) {
    let [selected, setSelected] = useState(-1)

    let handleMoveClick = (e) => {
        if (onMoveSelected){
            onMoveSelected( e.target.innerHTML )
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
        }, [selected, moves]
    )

    useEffect(() => {
        setSelected(-1)
    },[moves])

    let handleKeyDown = (e) => {

        if (e.key == "ArrowDown"){
            if (selected >= moves.length -1)
                return setSelected(-1)
            else{
                setSelected(selected+1)
            }
        }
        else if (e.key == "ArrowUp"){
            if (selected <= -1 )
                setSelected(moves.length-1)
            else
                setSelected(selected-1)
                
        }
        else if (e.key == "ArrowRight"){
            
            if (moves.length==1)
                onMoveSelected(moves[0])
            else if (selected != -1)   
                onMoveSelected(moves[selected])
            else (setSelected(0))
        }
        else if (e.key == "ArrowLeft"){
            onPrev()
        }
    }

    let onNextClick = () => {
        if (moves.length == 1)
            onMoveSelected(moves[0])
        else if (selected != -1)
            onMoveSelected(moves[selected])
    }
    let onPrevClick = () => {
        onPrev()
    }
    return (
    <div className="Interface">
        <ul className="ShowMovesBox">
            {moves.map((el, i) => {
                let className = (i == selected) ? "BoxMove SelectedBoxMove" : "BoxMove"
                return <li className={className} key={el} onClick={handleMoveClick}>{el}</li>
            })
            }
        </ul>
            
        <button className="Prev" onClick={onPrevClick}>{"<-"}</button>
        <button className="Next" onClick={onNextClick}>{"->"} </button>
    </div>
    )
}