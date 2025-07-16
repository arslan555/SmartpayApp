import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import IconMapper from './ui/IconMapper';

export interface CardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  category,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <IconMapper name={icon} size={32} color="#333" style={styles.icon} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{category}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  badge: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#E0ECF8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#3366CC',
    fontWeight: '500',
  },
});

export default Card;
