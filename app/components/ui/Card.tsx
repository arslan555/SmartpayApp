import React, { forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  TextProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface WithStyle {
  style?: ViewStyle | TextStyle | (ViewStyle | TextStyle)[];
}

// Card container
export const CardBase = forwardRef<View, ViewProps & WithStyle>(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.card, style]} {...props} />
));
CardBase.displayName = 'Card';

// Header
export const CardHeader = forwardRef<View, ViewProps & WithStyle>(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.header, style]} {...props} />
));
CardHeader.displayName = 'CardHeader';

// Title
export const CardTitle = forwardRef<Text, TextProps & WithStyle>(({ style, ...props }, ref) => (
  <Text ref={ref} style={[styles.title, style]} {...props} />
));
CardTitle.displayName = 'CardTitle';

// Description
export const CardDescription = forwardRef<Text, TextProps & WithStyle>(({ style, ...props }, ref) => (
  <Text ref={ref} style={[styles.description, style]} {...props} />
));
CardDescription.displayName = 'CardDescription';

// Content
export const CardContent = forwardRef<View, ViewProps & WithStyle>(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.content, style]} {...props} />
));
CardContent.displayName = 'CardContent';

// Footer
export const CardFooter = forwardRef<View, ViewProps & WithStyle>(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.footer, style]} {...props} />
));
CardFooter.displayName = 'CardFooter';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: '#e5e7eb', // Tailwind border
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: 'column',
    padding: 16,
    gap: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
  },
  description: {
    fontSize: 14,
    color: '#6b7280', // Tailwind gray-500
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 0,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 0,
  },
});
