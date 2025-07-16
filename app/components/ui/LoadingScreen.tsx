import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import TopBar from '../TopBar';

interface LoadingScreenProps {
  title: string;
  message: string;
  backgroundColor?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  title,
  message,
  backgroundColor = '#f3f4f6',
}) => {
  return (
    <View style={styles.container}>
      <TopBar title={title} backgroundColor={backgroundColor} />
      <View style={styles.loadingContent}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
  },
});

export default LoadingScreen; 