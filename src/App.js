import React from 'react';
import Cart from './Cart';
// import CartItem from './CartItem';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {

    constructor(){
      super();
      this.state = {
          products : [],
          loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount(){
    this.db
      .collection('products')
      .onSnapshot(
        (snapshot)=>{
          // console.log(snapshot);
    
          // snapshot.docs.forEach((doc)=>{
          //   console.log(doc.data());
          // });
    
          const products = snapshot.docs.map((doc)=>{
    
            const data = doc.data();
    
            data['id'] = doc.id;
            return data;
          })
    
          this.setState({
            products,
            loading: false
          })
        }
      )
  }

  handleIncreaseQuantity = (product) => {
      // console.log('Heyy please inc the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef.update({
        qty: products[index].qty + 1
      })
      .then(()=>{
        console.log('qty inc successfully');
      })
      .catch((err) => {
        console.log('error : ',err);
      })


      // products[index].qty += 1;

      // this.setState({
      // products
      // })
  }

  handleDecreaseQuantity = (product) => {
      // console.log('Heyy please inc the qty of ', product);
      
      const { products } = this.state;
      const index = products.indexOf(product);
      if(products[index].qty===1){
          return;
      }
      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty: products[index].qty - 1
        })
        .then(()=>{
          console.log('qty dec success');
        })
        .catch((err)=>{
          console.log('error : ', err);
        })
  }

  handleDeleteProduct = (id) => {
      const {products}  = this.state;
      const item = products.filter((item) =>  item.id !== id);

      const docRef = this.db.collection('products').doc(id);

      docRef
        .delete()
        .then(()=>{
          console.log('product del success');
        })
        .catch((err)=>{
          console.log(err);
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

  getCartTotal = () => {
    const {products} = this.state;

    var total = 0;

    products.forEach((product) => {
      total = total + product.price * product.qty;
    })
    return total;
  }

  addProductHandler = () => {
    this.db
      .collection('products')
      .add({
        title: "added prod.",
        qty: 1,
        price: 2562,
        image: ''
      })
        .then((docRef)=>{
          console.log('proudct has been added ', docRef);
        })
        .catch((err) => {
          console.log('error : ', err);
        })
  }

    render(){
      const {products, loading} = this.state;
      return (
        <div className="App">
          {/* <h1>Cart</h1> */}
          <Navbar 
          count = {this.getCartCount()}
          />
          <button onClick = {this.addProductHandler}>Add Product</button>
          <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDelete = {this.handleDeleteProduct}
          />
          {loading && <h3>Products are loading</h3>}
          <div style={{fontSize: 30, fontWeight: 'medium', padding: 10}}>Total: Rs. {this.getCartTotal()}</div>
          
        </div>
      );
    }
}

export default App;
