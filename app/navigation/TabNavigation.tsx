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
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        
      }}
    >
      <Tab.Screen
        name="Homes"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
