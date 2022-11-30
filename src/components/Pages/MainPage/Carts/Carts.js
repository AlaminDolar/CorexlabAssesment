import React, { useEffect, useState } from 'react';
import CartPage from '../CartPage';

const Carts = () => {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('fakeApi.json')
        .then(res=>res.json())
        .then(data=>setCart(data))
    },[])
    return (
        <div>
            {
                cart.map(cart=><CartPage
                cart={cart}
                key={cart.id}
                ></CartPage>)
            }
        </div>
    );
};

export default Carts;