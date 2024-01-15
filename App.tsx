import Home from './app/screens/home/Home';
import { CartProvider } from './app/context/shop-context';

export default function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

