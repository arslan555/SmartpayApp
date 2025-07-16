// Service for fetching cards
import { mockCards } from '../constants/mockCards';

// Simulate API call
export const getCards = async () => {
  // In a real app, replace with fetch('https://api.example.com/cards')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCards);
    }, 1500);
  });
};

// Placeholder for future real API integration
// export const getCards = async () => {
//   const response = await fetch('https://api.example.com/cards');
//   return response.json();
// }; 