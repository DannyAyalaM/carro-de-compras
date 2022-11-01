import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0a28e',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        maxWidth: '1200px',
    }
}

class Layout extends Component {
    render () {
        return (
            <div style={ styles.layout }>
                <div style={ styles.container }>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Layout