import React from "react"
import './cart.css'

function Cart(props) {
    return (
        <div className="cart">
            <div className="cartContent">
                <img src={props.url} alt=""/>
                <h4>{props.name}</h4>
                <h5>{props.price}</h5>
                <button className="button">Add To Cart</button>
            </div>
        </div>
    )
}

export default Cart
