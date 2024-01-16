import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons' // Make sure to install @expo/vector-icons
import { styles } from './style'
import { ProductProps } from '../../types/interfaces'

const ProductCard = ({
  product,
  onAddToCart,
  onToggleFavorite,
  onNavigate
}: ProductProps) => {
  return (
    <TouchableOpacity
      style={styles.card}
      // style={{ flexDirection: "row"}}
      onPress={onNavigate}
    >
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={onToggleFavorite}
          style={styles.favoriteIcon}
        >
          <FontAwesome
            name='heart'
            size={20}
            color={product.favourite ? 'red' : 'black'}
          />
        </TouchableOpacity>

        <Image
          source={{ uri: product.images[0] }}
          style={styles.productImage}
        />

        <View style={styles.productDetails}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text
            style={styles.productDescription}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {product.description}
          </Text>
          <TouchableOpacity
            onPress={onAddToCart}
            style={styles.addToCartButton}
          >
            <FontAwesome name='plus' size={20} color='white' />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard
