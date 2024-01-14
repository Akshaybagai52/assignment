// YourScreen.js

import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import ProductCard from '../../components/product-card/ProductCard'
import makeGetRequest from '../../api/api'
import { ApiResponse, Product } from '../../types/interfaces'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
  
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        console.log('Updated Cart (existing product):', updatedCart);
        return updatedCart;
      } else {
        const newProduct = { ...product, quantity: 1 };
        console.log('New Product:', newProduct);
        const updatedCart = [...prevCart, newProduct];
        console.log('Updated Cart (new product):', updatedCart);
        return updatedCart;
      }
    });
  };

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
              onAddToCart={() => addToCart(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
        )}
      />
    </View>
  )
}

export default Home
