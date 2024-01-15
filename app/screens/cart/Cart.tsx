import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../../context/shop-context";
import { Product } from "../../types/interfaces";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext<any>(CartContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        {cartItems.map((item: Product) => (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.itemDetails}>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.thumbnail}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => removeFromCart(item)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        {cartItems.length > 0 ? (
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${getCartTotal()}</Text>
            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  itemDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: "#666",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#333",
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  quantity: {
    marginHorizontal: 8,
  },
  totalContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  clearButton: {
    backgroundColor: "#333",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  clearButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default Cart;
