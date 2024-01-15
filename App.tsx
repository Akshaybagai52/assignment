import Home from './app/screens/home/Home';
import { CartProvider } from './app/context/shop-context';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './app/navigation/TabNavigation';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </CartProvider>
  );
}

