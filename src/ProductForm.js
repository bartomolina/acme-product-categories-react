import React from 'react'

const ProductForm = ({ products }) => {
    return (
        <div>
            <div className="panel panel-default">
                <div className="panel-heading">Add a Product</div>
                <div className="panel-body">
                    <form onSubmit={ onSave }>
                        <div className="form-group"><label>Name</label><input name="name" className="form-control" value="" /></div>
                        <div className="form-group"><label>Price</label><input type="number" name="price" className="form-control" value="0" /></div>
                        <div className="form-group"><label>Instock</label><br /><input type="checkbox" name="inStock" value="on" /></div>
                        <div className="form-group"><label>Category</label><select name="categoryId" className="form-control"><option value="">-- none --</option><option value="1">Foo Category</option><option value="2">Bar Category</option><option value="3">Bazz Category</option></select></div>
                        <div className="form-group"><button className="btn btn-primary btn-block">Save</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductForm