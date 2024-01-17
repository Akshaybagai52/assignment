export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
  favourite?: boolean;
}

export interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductProps {
  product: Product
  onAddToCart: () => void
  onToggleFavorite: () => void
  onNavigate: () => void
  getCartTotalQuantity: () => void
}