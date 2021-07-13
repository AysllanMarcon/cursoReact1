import React, { Component } from "react";
import FormularioCastro from "./components/FormularioCadastro/FomularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

class App extends Component {
  render(){
    return (
      <section>
        <FormularioCastro/>

        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
