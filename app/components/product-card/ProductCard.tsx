import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons' // Make sure to install @expo/vector-icons

const ProductCard = ({
  product,
  onAddToCart,
  onToggleFavorite,
  onNavigate
}) => {
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
            color={product.isFavorite ? 'red' : 'black'}
          />
        </TouchableOpacity>

        <Image
          source={{ uri: product.images[0] }}
          style={styles.productImage}
        />

        <View style={styles.productDetails}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
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

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'column',
    alignItems: 'center'
  },
  card: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // width: "40%",
    flex: 1
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    left: 10
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10
  },
  productDetails: {
    flex: 1
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  productDescription: {
    fontSize: 14,
    color: 'gray'
  },
  addToCartButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ProductCard
