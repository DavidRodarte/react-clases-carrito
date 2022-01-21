import { Component } from "react";
import Logo from "./Logo";
import Carrito from "./Carrito";

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow : '0 2px 3px rgba(0,0,0,0.1)'
    }
}
class Navbar extends Component {
    render() {
        const {carro, carroVisible, mostrarCarro} = this.props
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Carrito 
                carro={carro} 
                carroVisible={carroVisible}
                mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}

export default Navbar;