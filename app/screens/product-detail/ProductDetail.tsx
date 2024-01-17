import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { CartContext } from '../../context/shop-context'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const ProductDetailPage = ({ route }:any) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    addFavourite
  } = useContext<any>(CartContext)

  const { productId } = route.params
  const navigation = useNavigation<any>()
  const navigateToCart = (productId: number) => {
    // Navigate to the ProductDescription screen
    addToCart(productId)
    navigation.navigate('Cart')
  }

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Image style={{ width: '100%', height: 300 }} source={{ uri: item }} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{productId.title}</Text>
      <Carousel
        data={productId.images}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={290}
      />

      <View style={styles.priceContainer}>
        <Text style={styles.price}>${productId.price}</Text>
        <Text style={styles.discount}>{productId.discountPercentage}% OFF</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={() => navigateToCart(productId)}
        >
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToCart(productId)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetailPage
