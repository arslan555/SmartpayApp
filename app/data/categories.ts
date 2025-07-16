import { Category } from "../types/Category";

export const categories: Category[] = [
    { 
      id: 'dining', 
      name: 'Dining', 
      icon: 'restaurant', 
      description: 'Restaurants, cafes, and food delivery'
    },
    { 
      id: 'shopping', 
      name: 'Shopping', 
      icon: 'store', 
      description: 'Retail stores, malls, and online shopping'
    },
    { 
      id: 'travel', 
      name: 'Travel', 
      icon: 'travel', 
      description: 'Airlines, hotels, and vacation packages'
    },
    { 
      id: 'groceries', 
      name: 'Groceries', 
      icon: 'store', 
      description: 'Supermarkets and grocery stores'
    },
    { 
      id: 'entertainment', 
      name: 'Entertainment', 
      icon: 'store', 
      description: 'Movies, events, and activities'
    },
    { 
      id: 'utility', 
      name: 'Utilities', 
      icon: 'credit-card', 
      description: 'Bills, utilities, and services'
    },
    { 
      id: 'fuel', 
      name: 'Fuel', 
      icon: 'map-pin', 
      description: 'Gas stations and fuel purchases'
    },
  ];
  
  export type CategoryId = 'dining' | 'shopping' | 'travel' | 'groceries' | 'entertainment' | 'utility' | 'fuel';