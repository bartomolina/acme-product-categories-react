import React, { Component } from 'react'

class ProductForm extends Component {
    constructor() {
        super()
        this.state = {
            name: 'test',
            price: 0,
            inStock: true,
            category: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleSubmit(ev) {
        ev.preventDefault()
        this.props.onSaveProduct(this.state)
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
        const { name, price, inStock, category } = this.state
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
                                <select onChange={handleInputChange} value={category} name="categoryId" className="form-control">
                                    <option value="">-- none --</option>
                                    <option value="1">Foo Category</option>
                                    <option value="2">Bar Category</option>
                                    <option value="3">Bazz Category</option>
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