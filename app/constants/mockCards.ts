export interface MockCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export const mockCards: MockCard[] = [
  {
    id: '1',
    title: 'Daily Spending Limit',
    description: 'Track and control your daily expenses easily.',
    icon: 'dollar-sign',
    category: 'Budget',
  },
  {
    id: '2',
    title: 'Best Credit Card to Use',
    description: 'Use the most rewarding card for this purchase.',
    icon: 'credit-card',
    category: 'Smart Tips',
  },
  {
    id: '3',
    title: 'Budget Overview',
    description: 'Summary of your current month’s spending.',
    icon: 'activity',
    category: 'Budget',
  },
  {
    id: '4',
    title: 'Upcoming Bills',
    description: 'Check due bills for the week.',
    icon: 'calendar',
    category: 'Reminders',
  },
  {
    id: '5',
    title: 'Travel Spending Alert',
    description: 'High spending detected in travel category.',
    icon: 'alert-triangle',
    category: 'Alerts',
  },
];
