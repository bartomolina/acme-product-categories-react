import React, { Component } from 'react'

class ProductForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            inStock: true,
            categoryId: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleSubmit(ev) {
        ev.preventDefault()
        this.props.onSaveProduct(this.state)
        this.setState({
            name: '',
            price: 0,
            inStock: true,
            categoryId: ''
        })
    }

    handleInputChange(ev) {
        const target = ev.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        console.log(name)

        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, price, inStock, categoryId } = this.state
        const { handleSubmit, handleInputChange } = this
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">Add a Product</div>
                    <div className="panel-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input onChange={handleInputChange} name="name" className="form-control" value={name} />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input onChange={handleInputChange} type="number" name="price" className="form-control" value={price} />
                            </div>
                            <div className="form-group">
                                <label>Instock</label>
                                <br />
                                <input onChange={handleInputChange} type="checkbox" name="inStock" value={inStock} checked={inStock} />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select onChange={handleInputChange} value={categoryId || ''} name="categoryId" className="form-control">
                                <option value="">-- none --</option>
                                    {
                                        this.props.categories.map(category => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductForm