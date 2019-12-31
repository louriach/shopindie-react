import React from 'react' 

class ProductImage extends React.Component {
    render() {
        return(
            // <div class="product--image" style="background-image: url(https://cdn.shopify.com/s/files/1/0075/8682/products/WildiPhone2018-classic-07_1024x1024.jpg?v=1538991112);"></div>
            <img src={this.props.img} alt=""/>
        )
    }
}

export default ProductImage