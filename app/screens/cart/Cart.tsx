import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../../context/shop-context'
import { Product } from '../../types/interfaces'
import { colors } from '../../styles/colors/colors'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext<any>(CartContext)
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Shopping Cart</Text>
        {cartItems.map((item: Product) => (
          <View key={item.id} style={styles.itemContainer}>
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
          </View>
        ))}
        {cartItems.length > 0 ? (
          <View style={styles.total}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}> ${getCartTotal()}</Text>
            </View>

            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.clearButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    width: '80%',
    flex: 1,
    paddingVertical: 20
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 8,
    objectFit: 'contain'
  },
  thumbnail: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: 16
  },
  textContainer: {
    marginLeft: 8,
    maxWidth: 150
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  price: {
    color: '#1E222B',
    fontSize: 14
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.black10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  buttonText: {
    color: colors.black100, // Adjust the text color as needed
    fontSize: 14,
    fontWeight: 'bold'
  },
  quantity: {
    fontSize: 14,
    marginHorizontal: 5
  },
  total: {
    width: '80%',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderRadius: 20
  },
  totalContainer: {
    alignItems: 'center',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  clearButton: {
    backgroundColor: colors.blue60,
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16
  }
})

export default Cart
