import React, { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    carrito: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px',
    }
}
class Carrito extends Component {
  render() {
    const {carro, mostrarCarro, carroVisible} = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
        <div>
            <span style={styles.bubble}>
                {cantidad > 0 ? <BubbleAlert value={cantidad} />  : null}
                
            </span>
            <button style={styles.carrito} onClick={mostrarCarro}>
                Carrito
            </button>
            {
                carroVisible ? <DetallesCarro carro={carro}/> : null
            }
            

        </div>
    )
  }
}

export default Carrito;
