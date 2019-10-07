import React from "react";
import "./style.css";

class Contador extends React.Component {
    state = {
        contador: 0
    }

    add = () => {
       let addContador = this.state.contador;
       addContador++;
       this.setState({ contador : addContador });
    }

    diminuir = () => {
        let diminuirContador = this.state.contador;
        diminuirContador--;
        this.setState({ contador : diminuirContador });
     }

     zerar = () => {
        this.setState({ contador : 0 });
     }
    
    render() {
        return (
            <>
                <h1>Contador:{ this.state.contador}</h1>
                <div>
                    <button className="zerar" onClick={this.zerar} > Zerar</button>
                    <button className="add" onClick={this.add} > Adicionar</button>
                    <button className="diminuir" onClick={this.diminuir} > Diminuir</button>
                </div>

            </>
        );
    }
}


export default Contador;