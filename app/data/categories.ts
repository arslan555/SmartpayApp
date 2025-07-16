import { Category } from "../types/Category";

export const categories: Category[] = [
  { 
    id: 'dining', 
    name: 'Dining', 
    icon: 'restaurant', 
    description: 'Restaurants, cafes, bars, food delivery'
  },
  { 
    id: 'groceries', 
    name: 'Groceries', 
    icon: 'store', 
    description: 'Supermarkets, grocery stores, wholesale clubs'
  },
  { 
    id: 'travel', 
    name: 'Travel', 
    icon: 'plane', 
    description: 'Airlines, hotels, car rental, public transit, cruise'
  },
  { 
    id: 'fuel', 
    name: 'Fuel', 
    icon: 'fuel', 
    description: 'Gas stations and fuel purchases'
  },
  { 
    id: 'shopping', 
    name: 'Shopping', 
    icon: 'shopping-bag', 
    description: 'Retail, malls, online shopping, department stores'
  },
  { 
    id: 'entertainment', 
    name: 'Entertainment', 
    icon: 'film', 
    description: 'Movies, streaming, concerts, events, amusement parks'
  },
  { 
    id: 'utilities', 
    name: 'Utilities & Bills', 
    icon: 'credit-card', 
    description: 'Phone, internet, cable, electricity, water, subscriptions'
  },
  { 
    id: 'home', 
    name: 'Home & Improvement', 
    icon: 'home', 
    description: 'Home improvement, furniture, hardware, gardening, repairs'
  },
  { 
    id: 'pharmacy', 
    name: 'Pharmacy & Health', 
    icon: 'plus-circle', 
    description: 'Drugstores, health supplies, wellness services'
  },
  { 
    id: 'transit', 
    name: 'Transportation', 
    icon: 'map-pin', 
    description: 'Taxis, ride-hailing, parking, tolls, public transit'
  },
  { 
    id: 'electronics', 
    name: 'Electronics & Appliances', 
    icon: 'tablet', 
    description: 'Electronics, gadgets, home appliances'
  },
];

  
export type CategoryId =
  | 'dining'
  | 'groceries'
  | 'travel'
  | 'fuel'
  | 'shopping'
  | 'entertainment'
  | 'utilities'
  | 'home'
  | 'pharmacy'
  | 'transit'
  | 'electronics';