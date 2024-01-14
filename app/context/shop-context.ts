import React, {createContext, useState } from 'react'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < products.length; i++) {
        cart[i] = 0;
    }
    return cart
}

export const ShopContextProvider = (props:any) => {
    const [cartItem, setCartItem] = useState(getDefaultCart())
    return (
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    )
}
