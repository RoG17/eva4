import React, {useEffect, useState} from "react";
import Nota from './Nota';
import { v4 as uuid} from 'uuid';
import "./ListaNotas.css";

function ListaNotas() {
    const inicialNotas= JSON.parse(localStorage.getItem("notas")) || [];
    const [notas, setNotas]= useState([inicialNotas]);
    const [titulo, setTitulo]= useState("");
    const [descripcion, setDescripcion]= useState("");
    const [error, setError]= useState("");

    useEffect(() => {
        localStorage.setItem("notas", JSON.stringify(notas));
    }, [notas])

    const agregarNota= (e) => {
        e.preventDefault();
        
        if (descripcion.trimEnd() === ""){
            setError("Debe completar este campo");
            return;
        }

        const nuevaNota= {
            id: uuid(),
            titulo,
            descripcion,
        };

        setNotas([...notas, nuevaNota]);
        setTitulo("");
        setDescripcion("");
        setError("");
    };

    return(
        <div className= "container my-3">
            <br></br>
            <div className= "titulo">
                <h2>Mis Notas</h2>
            </div>
            <hr></hr>
            <form onSubmit= {agregarNota}>
                <div className= "ms-2">
                    <input type= "text" id= "titulo" className= "form-control" placeholder= "Titulo" value= {titulo} onChange= {(e) => setTitulo(e.target.value)}></input>
                    <br></br>
                    <div className= "ms-3">
                        <textarea id= "descripcion" className= "form-control" placeholder= "Descripcion" value= {descripcion} onChange= {(e) => setDescripcion(e.target.value)}></textarea>
                        {error && <div className= "text-danger">{error}</div>}
                    </div>
                    <br></br>
                    <div className= "check-form ms-4">
                        <input type= "checkbox"></input>
                        <label className= "ms-2">Importante</label>
                    </div>
                    <br></br>
                    <button type= "submit" className= "btn btn-primary">Agregar</button>
                </div>
            </form>
            <div className= "lista-notas">{notas.map((nota) => (
                <Nota key= {nota.id} titulo= {nota.titulo} descripcion= {nota.descripcion}></Nota>
            ))}</div>
        </div>
    );
}

export default ListaNotas;