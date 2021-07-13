import React, { Component } from "react";
import "./style.css";

class FormularioCastro extends Component{
    render(){
        return(
            <form className="formCadastro">
                <input type="text" placeholder="Titulo" className="formCadastroInput"/>
                <textarea placeholder="Escreva sua nota..." className="formCadastroInput"/>

                <button className="formCadastroSubmit">Criar nota</button>
            </form>
        );
    }
}

export default FormularioCastro;