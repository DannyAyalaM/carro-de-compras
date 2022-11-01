import { Component } from "react";

const styles = {
    title: {
        marginBottom: '.5rem',
        marginLeft: '1rem'
    }
}

class Title extends Component{
    render () {
        return (
            <h1 style={ styles.title }>Tienda</h1>
        )
    }
}

export default Title