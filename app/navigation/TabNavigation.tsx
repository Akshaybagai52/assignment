import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Cart from '../screens/cart/Cart';
import { useContext } from 'react';
import { CartContext } from '../context/shop-context';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Favourite from '../screens/favourites/Favourite';
import ProductDetailPage from '../screens/product-detail/ProductDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
    </Stack.Navigator>
  );
}

export function MyTabs() {
  const { getCartTotalQuantity } = useContext(CartContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
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
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
