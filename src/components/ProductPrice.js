import React from 'react'

class ProductPrice extends React.Component {
    render() {
        return(
            <p className="product--price">{this.props.price}</p> 
        )
    }
}

export default ProductPrice