import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetailsCar from "./DetailsCar";

const styles = {
    car: { 
        backgroundColor: '#359a2c',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px'
    }
}

class Car extends Component {
    render () {
        const { car, show, showDetails } = this.props
        const cantidad = car.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span style={ styles.bubble }>
                    { cantidad !==0 
                        ? <BubbleAlert value = { cantidad } />
                        : null}
                </span>
                <button style={ styles.car } onClick={ showDetails }>
                   Shop Car
                </button>
                { show ? <DetailsCar car={ car } /> : null}
                
            </div>
        )
    }
}

export default Car