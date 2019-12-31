import React from 'react'
import Product from './Product'
import {storeProducts} from './Data'

class SectionWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            category: '',
            price: ''
        };
      }

    render () {
        console.log(storeProducts)
        return(
            <section>
                <h2>Section name</h2>
                <Product 
                    title={this.state.title} 
                    img={this.state.img} 
                    category={this.state.category} 
                    price={this.state.price} 
                />
            </section>
        )
    }
}

export default SectionWrapper