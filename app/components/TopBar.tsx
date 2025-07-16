import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TopBarProps {
  title?: string;
  backgroundColor?: string;
}

const TopBar: React.FC<TopBarProps> = ({
  title = 'SmartPay',
  backgroundColor = '#f3f4f6',
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          backgroundColor,
        },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 72,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d1d5db',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
  },
});

export default TopBar;
