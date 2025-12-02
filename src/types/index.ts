//ALERT BOX COMPONENT
export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertBoxProps {
    type: AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;
}

//USER PROFILE CARD COMPONENT
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string, userName: string) => void;
  children?: React.ReactNode;
}

//PRODUCT DISPLAY COMPONENT
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  imageAlt?:string;
  inStock: boolean;
}
 
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string, productName:string) => void;
  children?: React.ReactNode;
}