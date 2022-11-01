import { Component } from "react";
import Product from "./Product";

const styles = {
    products: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}

class Products extends Component {
    render () {
        const { products, addToCar } = this.props
        return (
            <div style={styles.products}>
                { products.map(product => 
                    <Product
                        addToCar={ addToCar }
                        key={ product.name }
                        product={ product }
                    />
                )}
            </div>
        )
    }
}

export default Products