import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Cart from "../screens/cart/Cart";
import { useContext } from "react";
import { CartContext } from "../context/shop-context";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Favourite from "../screens/favourites/Favourite";
const Tab = createBottomTabNavigator();

export function MyTabs() {
  const { getCartTotalQuantity } = useContext(CartContext);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Cart}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-cart" size={24} color="black" />
          ),
          tabBarBadge: getCartTotalQuantity(),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: "Favourties",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}