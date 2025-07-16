export type CreditCard = {
    id: string;
    name: string;
    bankId: string;
    image: string;
    cashbackRate: {
      dining: number;
      shopping: number;
      travel: number;
      groceries: number;
      entertainment: number;
      utility: number;
      fuel: number;
    };
    annualFee: number;
    benefits: string[];
  };
  