// YourScreen.js

import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import ProductCard from '../../components/product-card/ProductCard'
import makeGetRequest from '../../api/api'
import { ApiResponse, Product } from '../../types/interfaces'
import { CartContext } from '../../context/shop-context'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext<any>(CartContext)
  const toggleFavorite = (productId: number) => {
    // Implement your favorite functionality here
    console.log(`Toggled favorite for product with id ${productId}`)
  }

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
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
        )}
      />
    </View>
  )
}

export default Home
