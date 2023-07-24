import React from "react";
import Nota from "./Nota";

function Lista({notas}) {
    return (
        <div className='lista-notas'>
            {notas.map((nota) => (
                <Nota key= {nota.id} titulo= {nota.titulo} descripcion= {nota.descripcion} importante= {nota.importante}></Nota>
            ))}
        </div>
    );
}

export default Lista;