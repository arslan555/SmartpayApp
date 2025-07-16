import React from 'react';
import { Text, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface BadgeProps {
  label: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.base, styles[variant], style]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 9999,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white'
  
  },
  default: {
    backgroundColor: '#2563EB',
    borderColor: 'transparent',
  },
  secondary: {
    backgroundColor: '#111827',
    borderColor: 'transparent',
  },
  destructive: {
    backgroundColor: '#EF4444',
    borderColor: 'transparent',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#D1D5DB',
  },
});

export default Badge;
