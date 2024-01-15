import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailPage = () => {
  // Dummy product data
  const product = {
    id: 1,
    title: 'Product Title',
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
    ],
    price: 99.99,
    discountPercentage: 15,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{product.title}</Text>

        {product.images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}

      <View style={styles.priceContainer}>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.discount}>{product.discountPercentage}% OFF</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
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
    fontWeight: 'bold',
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  discount: {
    fontSize: 16,
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailPage;
