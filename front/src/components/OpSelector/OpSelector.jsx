import { useState, useEffect } from "react"
import "./OpSelector.css"

import AddIcon from "../../../img/icons/add.png"
import initialOp from "../../helpers/initialOp"

import OpList from "./OpList/OpList"

import { getOpenings, addOpening, removeOpening, updateOpeningName } from "../../helpers/apiCalls" 

export default function OpSelector ( { username }){
    let [ openingList, setOpeningList ] = useState([])
    let [ filter, setFilter ] = useState("")
    let [ addName, setAddName ] = useState("")
    
    useEffect( () => { updateData()}, [])

    let updateData = () => {
        getOpenings()
        .then((data)=>{
            console.log("Data:",data)
            setOpeningList( data.map(({_id, name, shown_pos}) => ({opening_id: _id, name, shown_pos})) )
        })
    }

    let filerAndSort = (openingList, filter) => (
        filter[0] ?
        openingList.filter((opening) => ( opening.name.toLowerCase().includes(filter.toLowerCase()) ) )
        .sort((op1, op2) => {
            let filter_first = filter[0].toLowerCase()
            let op1_first = op1.name[0].toLowerCase()
            let op2_first = op2.name[0].toLowerCase()
            if (op1_first == filter_first )
                return -1
            else if (op2_first == filter_first )
                return 1
            else 
                return 0
            })
        :
        openingList
    )

    let handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    let handleAddNameChange = (event) => {
        console.log(event.target.value)
        setAddName(event.target.value)
    }

    let handleEditSubmit = (opening_id, name) => {
        updateOpeningName(opening_id, name)
        setOpeningList(
            openingList.map((el)=>{
                if (el.opening_id == opening_id){
                    el.name = name
                }
                return (el)
            })
        )
    }

    let handleAddClick = () => {
        document.getElementById("addName").value=("")
        addOpening(addName).then(()=>{updateData()})
    }

    let handleRemoveClick = (opening_id) => {
        removeOpening(opening_id)
        setOpeningList( openingList.filter((el)=>(el.opening_id != opening_id)) )
    }

    console.log(username)
    return (
        <div className="OpSelector">
            <div className = "OpSelectorHead">
                <div className="Title">
                    {username} Studio
                </div>
                <div className="Tools">
                        <input  type="text" name="addName" id="addName" placeholder="Name" onChange={handleAddNameChange}/> 
                        <img className = "AddButton" src={AddIcon} onClick ={handleAddClick}/>
                        <input  type="text" name="filter" placeholder="Search" onChange={handleFilterChange}/> 
                </div>
            </div>
            
            <div>
                {
                    openingList.length ? 
                    <OpList openingList={filerAndSort(openingList, filter)} 
                    onEditSubmit={handleEditSubmit}
                    onRemoveClick={handleRemoveClick}
                    />
                    :
                    <text className="NoDataMessage">No current data</text>
                    }
        
            </div>

        </div>
    )
}