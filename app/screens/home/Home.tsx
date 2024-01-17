// YourScreen.js

import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import ProductCard from '../../components/product-card/ProductCard'
import makeGetRequest from '../../api/api'
import { ApiResponse, Product } from '../../types/interfaces'
import { CartContext } from '../../context/shop-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    addFavourite
  } = useContext<any>(CartContext)
  const navigation = useNavigation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: ApiResponse = await makeGetRequest('products', {
          param1: 'value1'
        })
        setProducts(result.products)
        // console.log('API Result:', result)
      } catch (error) {
        // Handle error
      }
    }

    fetchData()
  }, [])

  const navigateToProductDescription = (productId: number) => {
    // Navigate to the ProductDescription screen
    navigation.navigate('ProductDetailPage', { productId })
  }

  return (
    <View>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={() => addToCart(item)}
            onToggleFavorite={() => addFavourite(item)}
            onNavigate={() => navigateToProductDescription(item)}
          />
        )}
      />
    </View>
  )
}

export default Home
