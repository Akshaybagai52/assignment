import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../../context/shop-context'
import ProductCard from '../../components/product-card/ProductCard'

const Favourite = () => {
  const {
    addToCart,
    addFavourite
  } = useContext<any>(CartContext)
  const { favouriteItems } = useContext(CartContext)
  console.log(favouriteItems, 'favorlsadjfklsdaflds')
  return (
    <View>
      <FlatList
        data={favouriteItems}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={() => addToCart(item)}
            onToggleFavorite={() => addFavourite(item)}
          />
        )}
      />
    </View>
  )
}

export default Favourite
