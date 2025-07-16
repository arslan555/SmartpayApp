import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TopBarProps {
  title?: string;
  backgroundColor?: string;
  onBack?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  title = 'SmartPay',
  backgroundColor = '#f3f4f6',
  onBack,
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
      <View style={styles.inner}>
        {onBack && (
          <Pressable onPress={onBack} style={styles.backButton} hitSlop={12}>
            <Text style={styles.backIcon}>{'\u2039'}</Text>
          </Pressable>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
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
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 8,
    padding: 4,
  },
  backIcon: {
    fontSize: 28,
    color: '#111827',
    fontWeight: '600',
    marginRight: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
  },
});

export default TopBar;
