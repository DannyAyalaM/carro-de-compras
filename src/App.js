import { Component } from 'react';
import Products from './components/Products/Products';
import Layout from './components/Products/Layout'
import Title from './components/Products/Title';
import Navbar from './components/Products/Navbar';

class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/products/tomate.png' },
      { name: 'Arbeja', price: 2500, img: '/products/arbeja.png' },
      { name: 'Lechuga', price: 500, img: '/products/lechuga.png' },
    ],
    car: [],
    show: false
  }

  addToCar = (product) => {
    const { car } = this.state
    if (car.find(x => x.name === product.name)) {
      const newCar = car.map(x => x.name === product.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        
        return this.setState({ car: newCar })
    }
    return this.setState({
      car: this.state.car.concat({
        ...product,
        cantidad: 1
      })
    })

  }

  showDetails = () => {
    if(!this.state.car.length) {
      return
    }
    this.setState({ show: !this.state.show})
  }

  render () {
    return (
        <div>
          <Navbar car = { this.state.car } show = { this.state.show } showDetails = { this.showDetails }/>
          <Layout>
            <Title />
            <Products 
              addToCar = { this.addToCar }
              products = { this.state.products}
            />
          </Layout>
        </div>
    )
  }
}

export default App;
