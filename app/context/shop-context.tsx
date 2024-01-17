import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define types for your items and context
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  favourite: boolean;
}

interface CartContextType {
  cartItems: CartItem[];
  favouriteItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartTotalQuantity: () => number;
  addFavourite: (item: CartItem) => void;
}

// Create the context
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Define the provider
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favouriteItems, setFavouriteItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  const addFavourite = (item: CartItem) => {
    setFavouriteItems((prevFavourites) => {
      const isItemFavourite = prevFavourites.find((favItem) => favItem.id === item.id);
  
      if (isItemFavourite) {
        // If item is already a favourite, remove it
        return prevFavourites.filter((favItem) => favItem.id !== item.id);
      } else {
        // If item is not a favourite, add it
        return [...prevFavourites, { ...item, favourite: true }];
      }
    });
  };

  const removeFromCart = (item: CartItem) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart && isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const getCartTotalQuantity = () => {
    return cartItems.reduce((total, product) => total + product.quantity, 0);
  };

  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem("cartItems");

        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error("Error loading cart from AsyncStorage:", error);
      }
    };

    loadCartFromStorage();
  }, []); // Empty dependency array to run only on component mount

  useEffect(() => {
    const saveCartToStorage = async () => {
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Error saving cart to AsyncStorage:", error);
      }
    };

    saveCartToStorage();
  }, [cartItems]);

  useEffect(() => {
    const loadFavouritesFromStorage = async () => {
      try {
        const storedFavouriteItems = await AsyncStorage.getItem("favouriteItems");

        if (storedFavouriteItems) {
          setFavouriteItems(JSON.parse(storedFavouriteItems));
        }
      } catch (error) {
        console.error("Error loading favourites from AsyncStorage:", error);
      }
    };

    loadFavouritesFromStorage();
  }, []);

  useEffect(() => {
    const saveFavouritesToStorage = async () => {
      try {
        await AsyncStorage.setItem("favouriteItems", JSON.stringify(favouriteItems));
      } catch (error) {
        console.error("Error saving favourites to AsyncStorage:", error);
      }
    };

    saveFavouritesToStorage();
  }, [favouriteItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        favouriteItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartTotalQuantity,
        addFavourite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
