import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AlertTriangle } from 'lucide-react-native';
import TopBar from '../TopBar';
import Button from './Button';

interface ErrorScreenProps {
  title: string;
  message: string;
  onRetry: () => void;
  backgroundColor?: string;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({
  title,
  message,
  onRetry,
  backgroundColor = '#f3f4f6',
}) => {
  return (
    <View style={styles.container}>
      <TopBar title={title} backgroundColor={backgroundColor} />
      <View style={styles.errorContent}>
        <View style={styles.iconContainer}>
          <AlertTriangle size={64} color="#EF4444" />
        </View>
        <Text style={styles.errorTitle}>Something went wrong</Text>
        <Text style={styles.errorMessage}>{message}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Try Again" onPress={onRetry} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 24,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 200,
  },
});

export default ErrorScreen; 