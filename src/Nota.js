import React from "react";
import Image from "./normal_adhesive_notes.png";
import "./Nota.css";

function Nota({titulo, descripcion, importante}) {
    return(
        <div className= "notas">
            <img src= {Image} alt= "bloc" className= "note-image"></img>
            <div className= "note-content">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}

export default Nota;