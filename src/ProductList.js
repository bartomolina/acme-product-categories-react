import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, categories }) => {
    return (
        <div className="col-sm-4">
            <div className="panel panel-default">
                <div className="panel-body">
                    <form>
                        <div className="form-group"><label>Name</label><input name="name" className="form-control" value={product.name} /></div>
                        <div className="form-group"><label>Price</label><input type="number" name="price" className="form-control" value={product.price} /></div>
                        <div className="form-group"><label>Instock</label><br /><input type="checkbox" name="inStock" value={product.inStock} /></div>
                        <div className="form-group"><label>Category</label>
                            <select value={product.categoryId || ''} name="categoryId" className="form-control">
                                <option value="">-- none --</option>
                                {
                                    categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group"><button disabled="" className="btn btn-primary btn-block">Save</button><button className="btn btn-danger btn-block">Delete</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
const ProductList = ({ products, categories }) => {
    return (
        <div>
            {products.map(product => {
                return (
                    <Product key={product.id} product={product} categories={categories} />
                )
            })}
        </div>
    )
}

export default ProductList