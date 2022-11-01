import { Component } from "react";
import Button from "./Button";

const styles = {
    product: {
        border: '1px solid #eee',
        boxShadow: '0px 5px 5px rgb(0,0,0,0.1)',
        maxWidth: '200px',
        padding: '10px 15px',
        borderRadius: '5px',
        margin: '1rem'
    },
    img: {
        width: '100%'
    },
    h3: {
        margin: '0px 0px .5rem 0px'
    },
    p: {
        margin: '0px 0px .5rem 0px'
    }
}

class Product extends Component {
    render () {
        const { product, addToCar } = this.props  
        
        return (
            <div style={ styles.product }>
                <img alt={ product.name } src={ product.img } style={ styles.img }/>
                <h3 style={ styles.h3 }>{ product.name } </h3>
                <p style={ styles.p }>{ product.price }</p>
                <Button onClick={ () => addToCar(product) }>
                    Add to car
                </Button>
            </div>
        )
    }
}

export default Product