// YourScreen.js

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import ProductCard from "../../components/product-card/ProductCard";
import makeGetRequest from "../../api/api";
import { ApiResponse, Product } from "../../types/interfaces";
import { CartContext } from "../../context/shop-context";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartTotalQuantity,
    addFavourite,
  } = useContext<any>(CartContext);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: ApiResponse = await makeGetRequest("products", {
          param1: "value1",
        });
        setProducts(result.products);
        // console.log('API Result:', result)
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const navigateToProductDescription = (productId: Product) => {
    // Navigate to the ProductDescription screen
    navigation.navigate("ProductDetailPage", { productId });
  };
  const navigateToCart = () => {
    // Navigate to the ProductDescription screen
    navigation.navigate("Cart");
  };
  const ListHeaderComponent = () => {
    return (
      <TouchableOpacity onPress={() => navigateToCart()}>
        <View style={styles.headerContainer}>
          <Feather name="shopping-cart" size={24} color="black" />
          {cartItems.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{getCartTotalQuantity()}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={() => addToCart(item)}
            onToggleFavorite={() => addFavourite(item)}
            onNavigate={() => navigateToProductDescription(item)}
          />
        )}
        ListHeaderComponent={ListHeaderComponent()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Align items to the end
    padding: 10,
    // backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    marginRight: 20,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Home;
