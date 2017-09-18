import React, { Component } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Summary from './Summary'
import { Route } from 'react-router-dom'

class App extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/products')
            .then(products => {
                console.log(products)
                this.setState({ products: products.data })
            })
    }

    render() {
        const { products } = this.state

        return (
            <div className='container'>
                <h1>Acme Product/Categories React</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <Route render={(router) => <ProductList products={products} />} />
                    </div>
                    <div className="col-sm-3">
                        <Route render={(router) => <ProductForm products={products} />} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App