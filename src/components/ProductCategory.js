import React from 'react'

class ProductCategory extends React.Component {
    render() {
        return(
            <span className="product--category">{this.props.category}</span>
        )
    }
}

export default ProductCategory