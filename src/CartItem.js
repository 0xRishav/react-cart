import React from 'react';

class CartItem extends React.Component{



// SET STATE FUNTION 
        

        // setState form 1 : object method

        // this.setState({
        //     qty: this.state.qty + 1
        // })

        // setState form 2 : fuction method

        // this.setState((prevState)=>{
        //     return{
        //         qty: prevState.qty += 1
        //     }
        // })



    render(){
        const { title, price, qty, image, id } = this.props.product;
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
                        <img 
                        src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg" 
                        alt="increase" 
                        className="action-icons"
                        onClick={()=>{this.props.onIncreaseQuantity(this.props.product)}}
                        />
                        <img 
                        src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg" 
                        alt="decrease" 
                        className="action-icons"
                        onClick={()=>{this.props.onDecreaseQuantity(this.props.product)}}
                        />
                        <img 
                        src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg" 
                        alt="delete" 
                        className="action-icons"
                        onClick={()=>{this.props.onDelete(this.props.product.id)}}
                        />
                        
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