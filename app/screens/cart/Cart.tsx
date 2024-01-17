import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/shop-context";
import { Product } from "../../types/interfaces";
import styles from "./styles";
// Define your transition

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext<any>(CartContext);
    const [removedItem, setRemovedItem] = useState(null);
    const fadeAnim = new Animated.Value(1);
  
    const handleRemove = (item) => {
      setRemovedItem(item);
      removeFromCart(item);
    };
  
    useEffect(() => {
      if (removedItem) {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          fadeAnim.setValue(1);
          setRemovedItem(null);
        });
      }
    }, [removedItem]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Shopping Cart</Text>
        {cartItems.map((item: Product) => (
          <Animated.View
            key={item.id}
            style={{ ...styles.itemContainer, opacity: fadeAnim }}
          >
            <TouchableOpacity onPress={() => handleRemove(item)}>
              <View style={styles.itemDetails}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.thumbnail}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
                
              </View>
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => removeFromCart(item)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        ))}
        {cartItems.length > 0 ? (
          <View style={styles.total}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}> ${getCartTotal()}</Text>
            </View>

            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Cart;
