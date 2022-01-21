import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Producto from "./components/Producto";

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 10, img: '/productos/tomate.jpg'},
      {name: 'Manzana', price: 20, img: '/productos/manzana.jpg'},
      {name: 'Limón', price: 70, img: '/productos/limon.jpg'},
    ],

    carro: [],
    carroVisible: false,
  }

  agregarAlCarrito = (producto) =>{
    const {carro} = this.state;
    if( carro.find(x => x.name === producto.name )){
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad+1
        }): x
        )
        return this.setState({carro: newCarro})
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () =>{
    if(!this.state.carro.length){
      return
    }
    this.setState({carroVisible: !this.state.carroVisible})
  }

  render() {
    console.log(this.state.carro)
    const {carroVisible} = this.state
    return (
      <div>
        <Navbar 
              carro={this.state.carro} 
              carroVisible={carroVisible} 
              mostrarCarro={this.mostrarCarro} 
        />

        <Layout>
          <Title />
          <Productos
            agregarCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;