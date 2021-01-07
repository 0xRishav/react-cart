import React from 'react';
import Cart from './Cart';
// import CartItem from './CartItem';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [
        {
            title: 'Mobile Phone',
            price: 8999,
            qty: 1,
            image: '',
            id: 1
        },
        {
            title: 'Watch',
            price: 2999,
            qty: 1,
            image: '',
            id: 2
        },
        {
            title: 'Laptop',
            price: 45000,
            qty: 1,
            image: '',
            id: 3
        },
        {
            title: 'Fan',
            price: 2895,
            qty: 1,
            image: '',
            id: 4
        },
        {
            title: 'iPad',
            price: 59999,
            qty: 1,
            image: '',
            id: 5
        },
        {
            title: 'Mehenga item',
            price: 1999999,
            qty: 1,
            image: '',
            id: 6
        }
    ]
}
}

handleIncreaseQuantity = (product) => {
    // console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
    products
    })
}

handleDecreaseQuantity = (product) => {
    // console.log('Heyy please inc the qty of ', product);
    
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===1){
        return;
    }
    products[index].qty -= 1;

    this.setState({
    products
    })
}

handleDeleteProduct = (id) => {
    const {products}  = this.state;
    const items = products.filter((item) =>  item.id !== id);

    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;
  
  let count = 0;

  products.forEach((product) => {
    count = count + product.qty;
  })

  return count;
}

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar 
        count = {this.getCartCount()}
        />

        <Cart
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDelete = {this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
