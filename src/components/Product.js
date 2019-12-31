import React from 'react'
import ProductImage from './ProductImage'
import ProductTitle from './ProductTitle'
import ProductCategory from './ProductCategory'
import ProductPrice from './ProductPrice'

class Product extends React.Component {
    render() {
        console.log('Product.js')
        return(
            <article className="product">
                <a href="https://www.hardgraft.com/products/wild-phonecase-classic" className="product--link" target="_blank">
                    <ProductImage img={this.props.img}/>
                    <div className="product--meta">
                        <ProductCategory category={this.props.category} />
                        <ProductTitle title={this.props.title} />
                        <ProductPrice price={this.props.price}/>
                    </div>
                </a>
            </article>
        )
    }
}

export default Product