// import {MouseEvent} from 'react';
import {useState} from "react";
import "./ListGroup.css"

interface Props{
    names : String[];
    heading : String;
    onSelectName : (name:String) => void;
}
function ListGroups({names, heading, onSelectName} : Props){

// let selectedIndex = 3;
// const handleCLick = (event : MouseEvent) => {console.log(event)};

const [selectedIndex , setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {/* {names.length === 0 ? <p>No Item found</p> :null} */}
            {names.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {names.map((name,index) => (
                    <li 
                    // className={selectedIndex===index ? "list-group-item active" : "list-group-item"}
                    className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
                    key={index}
                    onClick={() => {
                        setSelectedIndex(index) 
                        onSelectName(name)
                        }}>
                        <h2>{name}</h2>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroups;