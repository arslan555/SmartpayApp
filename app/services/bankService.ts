// Service for fetching banks
import { uaeBanks } from '../data/uaeBanks';

// Simulate API call
export const getBanks = async () => {
  // In a real app, replace with fetch('https://api.example.com/banks')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(uaeBanks);
    }, 1500);
  });
};

// Placeholder for future real API integration
// export const getBanks = async () => {
//   const response = await fetch('https://api.example.com/banks');
//   return response.json();
// }; 