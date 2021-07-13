import React, { Component } from 'react';
import "./style.css";

class CardNota extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="cardNota">
                <header className="cardNotaCabecalho">
                    <h3 className="cardNotaTitulo"> Titulo </h3>
                </header>
                <p className="cardNotaTexto">Escreva</p>
            </section>
        );
    }
}

export default CardNota;