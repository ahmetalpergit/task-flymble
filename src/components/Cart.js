import React, { useState, useEffect } from 'react';
import Hotel from './Hotel';
import Skeleton from './Skeleton';

function Cart() {

    //Fetch data
    const [hotels, setHotels] = useState('');

    //Total trip cost
    const [total, setTotal] = useState(0);

    //Handling fetch errors
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const request = await fetch('https://604fca60c20143001744dc61.mockapi.io/hotels');
                const data = await request.json();
                setHotels(data);
                return data;
            } catch (err) {
                setErrorMessage(`${err.message}: Please try again later!`)
            }
        }
        fetchHotels();
    }, [])

    //Get initial total cost based on default fetch
    useEffect(() => {
        setTotal(hotels ? hotels.reduce((acc, cur) => acc += +cur.total, 0): 0)
    }, [hotels])

    //Delete Hotels
    const handleDelete = (deleteID) => {
        setHotels(hotels => hotels.filter(el => el.id !== deleteID));
    }
    
    //Recalculate cost based on changed child Hotel components
    const handleTotal = (id, total) => {
        //Find the hotel we'll be adding total to
        const currentHotel = hotels.find(el => el.id === id);
        //add 'total' property on the hotel object to calculate total cost of trip
        currentHotel.total = total;
        setTotal(calculateTotal());
    }
    //Utility function to sum the totals from the Hotel obj total property
    const calculateTotal = () => {
        return hotels.reduce((acc, cur) => acc += +cur.total, 0)
    }

    return (
        <div className="cart">
            {errorMessage ? 
                <h1 style={{marginTop: '2rem'}}>{errorMessage}</h1>
                : 
                <>
                <h1 className="cart__heading">Welcome to Flymble Cart!</h1>
                <p className="cart__description">Please book your hotels and finalize your purchase here.</p>
                </>
            }
            {hotels ? //Load when hotels are ready
                hotels.map(el => {
                    return <Hotel key={'key' + el.id} id={el.id} name={el.name} subtitle={el.subtitle} imgUrl={el.image} price={el.price} deletion={handleDelete} handleTotal={handleTotal}/>
                })
            :   //Load Skeleton component until hotels are fetched
                <Skeleton />
            }
            {hotels && hotels.length > 0 &&
                <div className="cart__total">
                    <h1 className="cart__total__value">{total}€</h1>
                    <button className="cart__total__link">BUY</button>
                </div>
            }
        </div>
    )
}

export default Cart
