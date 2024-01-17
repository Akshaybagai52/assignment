import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { CartContext } from "../../context/shop-context";
import { useNavigation } from "@react-navigation/native";

const ProductDetailPage = ({ route }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    addFavourite,
  } = useContext<any>(CartContext);

  const { productId } = route.params;
  const navigation = useNavigation()
  const navigateToCart = (productId) => {
    // Navigate to the ProductDescription screen
    addToCart(productId)
    navigation.navigate('Cart')
  }


  const renderItem = ({ item }) => {
    return (
      <View style={{justifyContent:'center', alignItems: 'center', flex:1}}>
        <Image style={{ width: "100%", height: 300}} source={{ uri: item }} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{productId.title}</Text>
      {/* 
      {product.images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))} */}
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
        <TouchableOpacity style={styles.buyNowButton} onPress={() => navigateToCart(productId)}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(productId)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  swiperContainer: {
    height: 200,
    marginBottom: 16,
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 8,
  },
  discount: {
    fontSize: 16,
    color: "green",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginRight: 8,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "green",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetailPage;
