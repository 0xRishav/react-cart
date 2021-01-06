import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Mobile Phone',
            price: 8999,
            qty: 2,
            image: ''
        }
    }
    IncreaseQty =()=> {
        console.log(this.state);
    }
    render(){
        const { title, price, qty, image } = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="" alt=""/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg" 
                        alt="increase" 
                        className="action-icons"
                        onClick={this.IncreaseQty}/>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg" alt="decrease" className="action-icons"/>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg" alt="delete" className="action-icons"/>
                    </div>
                </div>
            </div>
        );
    }
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 6,
        background: '#ccc',
        outline: 'none'
    }
}

export default CartItem;