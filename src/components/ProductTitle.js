import React from 'react'

class ProductTitle extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
                <h3 className="product--name">{this.props.title}</h3>
            </>
        )
    }
}

export default ProductTitle