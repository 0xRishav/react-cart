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
            image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id: 1
        },
        {
            title: 'Watch',
            price: 2999,
            qty: 1,
            image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80',
            id: 2
        },
        {
            title: 'Laptop',
            price: 45000,
            qty: 1,
            image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id: 3
        },
        {
            title: 'Desk',
            price: 9999,
            qty: 1,
            image: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id: 4
        },
        {
            title: 'iPad',
            price: 59999,
            qty: 1,
            image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id: 5
        },
        {
            title: 'Chanel Perfume',
            price: 1999999,
            qty: 1,
            image: 'https://images.unsplash.com/photo-1598100463713-98fba67f6a56?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=375&q=80',
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
