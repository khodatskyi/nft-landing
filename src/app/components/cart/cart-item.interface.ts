export interface CartItem {
    img: string;
    title: string;
    category: string;
    status: string;
    price: number;
    likes?: number;
    description?: string;
    creator?: string;
  }