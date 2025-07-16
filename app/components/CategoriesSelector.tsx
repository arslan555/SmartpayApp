// ✅ components/CategorySelector.tsx (Categories passed from props)
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import {
  CreditCard,
  Coffee,
  ShoppingBag,
  Plane,
  Store,
  MapPin,
  Fuel,
} from 'lucide-react-native';

export interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const getCategoryIcon = (icon: string, isSelected: boolean) => {
  const size = 24;
  const color = isSelected ? '#2563EB' : '#6B7280';
  switch (icon) {
    case 'credit-card':
      return <CreditCard size={size} color={color} />;
    case 'restaurant':
      return <Coffee size={size} color={color} />;
    case 'store':
      return <Store size={size} color={color} />;
    case 'travel':
      return <Plane size={size} color={color} />;
    case 'map-pin':
      return <MapPin size={size} color={color} />;
    case 'fuel':
      return <Fuel size={size} color={color} />;
    default:
      return <ShoppingBag size={size} color={color} />;
  }
};

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <FlatList
      data={categories}
      numColumns={4}
      keyExtractor={(item) => item.id}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item.id;
        return (
          <Pressable
            style={[styles.card, isSelected && styles.cardSelected]}
            onPress={() => onCategoryChange(item.id)}
          >
            <View style={[styles.iconWrap, isSelected && styles.iconWrapSelected]}>
              {getCategoryIcon(item.icon, isSelected)}
            </View>
            <Text style={styles.name} numberOfLines={2}>
              {item.name}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardSelected: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconWrapSelected: {
    backgroundColor: '#DBEAFE',
  },
  name: {
    fontSize: 13,
    textAlign: 'center',
    color: '#111827',
  },
});

export default CategorySelector;
