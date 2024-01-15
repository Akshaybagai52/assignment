import { View, Text } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../../context/shop-context";
import ProductCard from "../../components/product-card/ProductCard";

const Favourite = () => {
  const { favouriteItems } = useContext(CartContext);
  console.log(favouriteItems, "favorlsadjfklsdaflds");
  return (
    <View>
      {favouriteItems.map((item) => (
        <View key={item.id}>
          <ProductCard product={item} />
        </View>
      ))}
    </View>
  );
};

export default Favourite;
