import { Component } from "react";
import Button from "./Button";

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    }
}

class Producto extends Component {
    render() {

        const {producto, agregarCarrito} = this.props;

        return (
            <div style={styles.producto}>
                <img style={{ width:'100%', maxHeight: '200px' }} alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>${producto.price}</p>
                <Button onClick={agregarCarrito}>
                    Agregar al carrito
                </Button>
            </div>
        )
    }
}

export default Producto;