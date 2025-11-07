import { useState } from "react";

function Change() {

    const [name, setName] = useState("typing...");
    const [quantIty, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");


    function handleTextChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleTextChange} />
            <p>NAME:{name}</p>

            <input value={quantIty} onChange={handleQuantityChange} type="number" />
            <p>QUANTITY:{quantIty}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="enter delivery instruction"></textarea>
            <p>COMMENT:{comment} </p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">--Choose Payment Method--</option>
                <option value="creditcard">Credit Card</option>
                <option value="paypal">Paypal</option>
                <option value="bitcoin">Bitcoin</option>
            </select>
            <p>PAYMENT METHOD:{payment}</p>

            <label htmlFor="">
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange} />
                Pick Up
            </label>
            <br />
            <label htmlFor="">
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>

            <p>SHIPPING: {shipping}</p>
        </div>
    )
}



export default Change;