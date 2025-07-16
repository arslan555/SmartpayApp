import { categories } from '../data/categories';

export const getCategories = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1500);
  });
};

// Placeholder for real API integration
// export const getCategories = async () => {
//   const response = await fetch('https://api.example.com/categories');
//   return response.json();
// }; 