import { Component } from "react";

const styles = {
    detailsCar: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: '50px'
    },
    ul: {
        margin: '0',
        padding: '0'
    },
    product: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class DetailsCar extends Component {
    render () {
        const { car } = this.props
        return (
            <div style={ styles.detailsCar}>
                <ul style={ styles.ul }>
                    { car.map(x => <li style={ styles.product } key={x.name}>
                        <img src={x.img} alt={x.name} width='50' height='32'/>
                        {x.name}
                        <span> {x.cantidad}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default DetailsCar