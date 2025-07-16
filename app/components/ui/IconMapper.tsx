import React from 'react';
import {
    Activity,
    CreditCard,
    AlertTriangle,
    Calendar,
    Zap,
    DollarSign,
    Grid,
    LucideIcon,
  } from 'lucide-react-native';
  interface IconMapperProps {
    name: string;
    size?: number;
    color?: string;
    style?: any;
  }
  const iconMap: Record<string, LucideIcon> = {
    'activity': Activity,
    'credit-card': CreditCard,
    'alert-triangle': AlertTriangle,
    'calendar': Calendar,
    'zap': Zap,
    'dollar-sign': DollarSign,
    'grid': Grid,
  };
  
  const IconMapper: React.FC<IconMapperProps> = ({
    name,
    size = 24,
    color = '#333',
    style,
  }) => {
    const IconComponent = iconMap[name] || Grid;
    return <IconComponent size={size} color={color} style={style} />;
  };
  
  export default IconMapper;