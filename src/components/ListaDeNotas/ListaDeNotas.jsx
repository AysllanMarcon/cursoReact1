import React, { Component } from "react";

import CardNota from "../CardNota/CardNota";
import "./style.css";

class ListaDeNotas extends Component{
    render(){
        return(
            <ul className="listaNotas">
                { Array.of("Trabalho", "Trabalho", "Estudos").map((cat, index) =>{
                    return (
                        <li className="listaNotasItem" key={index}>
                            {/* <div>{cat}</div> */}
                            <CardNota/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;