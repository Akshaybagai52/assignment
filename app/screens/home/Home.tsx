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
import styles from "./styles";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const {
    cartItems,
    addToCart,
    getCartTotalQuantity,
    addFavourite,
  } = useContext<any>(CartContext);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: ApiResponse = await makeGetRequest("products", {
          param1: "value1",
        });
        setProducts(result.products);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

  const navigateToProductDescription = (productId: Product) => {
    navigation.navigate("ProductDetailPage", { productId });
  };
  const navigateToCart = () => {
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



export default Home;
