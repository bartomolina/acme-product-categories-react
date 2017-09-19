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
            products: [],
            categories: []
        }
        
        this.syncDB = this.syncDB.bind(this)
        this.onSaveProduct = this.onSaveProduct.bind(this)
    }

    updateData() {
        axios.get('/api/products')
            .then(products => {
                axios.get('api/categories')
                .then(categories => {
                    this.setState({ products: products.data, categories: categories.data })
                })
            })
    }

    componentDidMount() {
        this.updateData()
    }

    onSaveProduct(user) {
        axios.post('/api/products/', user)
            .then(() => {
                this.updateData()
            })
    }

    syncDB(ev) {
        ev.preventDefault()
        axios.put('/api/products/')
            .then(products => {
                this.setState({ products: products.data })
            })
    }

    render() {
        const { products, categories } = this.state
        const { onSaveProduct, syncDB } = this

        return (
            <div className='container'>
                <h1>Acme Product/Categories React</h1>
                <form onSubmit={syncDB}>
                    <div className="form-group">
                        <button className="btn btn-success">Sync DB</button>
                    </div>
                </form>
                <div className="row">
                    <div className="col-sm-6">
                        <Route render={(router) => <ProductList products={products} categories={categories} />} />
                    </div>
                    <div className="col-sm-3">
                        <Route render={(router) => <ProductForm products={products} onSaveProduct={onSaveProduct} categories={categories} />} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App