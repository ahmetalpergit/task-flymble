import React, { useState, useEffect } from 'react';
import Hotel from './Hotel';

function Cart() {

    //Fetch data
    const [hotels, setHotels] = useState('');

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const request = await fetch('https://604fca60c20143001744dc61.mockapi.io/hotels');
                const data = await request.json();
                setHotels(data);
                return data;
            } catch (err) {
                console.error(err);
            }
        }
        fetchHotels();
    }, [])

    return (
        <div className="cart">
            <h1 className="cart__heading">Welcome to Flymble Cart!</h1>
            <p className="cart__description">Please book your hotels and finalize your purchase here.</p>

            {hotels && 
                hotels.map(el => {
                    return <Hotel key={'key' + el.id} id={el.id} name={el.name} subtitle={el.subtitle} imgUrl={el.image} price={el.price} />
                })
            }
        </div>
    )
}

export default Cart
