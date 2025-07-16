// ✅ components/CategorySelector.tsx (Categories passed from props)
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Button as RNButton,
} from 'react-native';
import {
  Coffee,
  Store,
  Plane,
  MapPin,
  CreditCard,
  Fuel,
  ShoppingBag,
  Home,
  Pill,
  Train,
  Monitor
} from 'lucide-react-native';
import Button from './ui/Button';

export interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoriesSelected: (ids: string[]) => void;
  onSave: () => void;
}

const getCategoryIcon = (icon: string, isSelected: boolean) => {
  const size = 24;
  const color = isSelected ? '#2563EB' : '#6B7280';
  switch (icon) {
    case 'restaurant':
      return <Coffee size={size} color={color} />;
    case 'store':
      return <Store size={size} color={color} />;
    case 'travel':
      return <Plane size={size} color={color} />;
    case 'fuel':
      return <Fuel size={size} color={color} />;
    case 'map-pin':
      return <MapPin size={size} color={color} />;
    case 'credit-card':
      return <CreditCard size={size} color={color} />;
    case 'home':
      return <Home size={size} color={color} />;
    case 'pharmacy':
      return <Pill size={size} color={color} />;
    case 'transit':
      return <Train size={size} color={color} />;
    case 'electronics':
      return <Monitor size={size} color={color} />;
    case 'shopping':
      return <ShoppingBag size={size} color={color} />;
    default:
      return <ShoppingBag size={size} color={color} />;
  }
};

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategories,
  onCategoriesSelected,
  onSave,
}) => {
  const toggleCategory = (id: string) => {
    if (selectedCategories.includes(id)) {
      onCategoriesSelected(selectedCategories.filter((catId) => catId !== id));
    } else {
      onCategoriesSelected([...selectedCategories, id]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={categories}
        numColumns={4}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => {
          const isSelected = selectedCategories.includes(item.id);
          return (
            <Pressable
              style={[styles.card, isSelected && styles.cardSelected]}
              onPress={() => toggleCategory(item.id)}
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
      <View style={styles.stickyFooter}>
        <Button
          title="Finish"
          onPress={onSave}
          disabled={selectedCategories.length === 0}
        />
      </View>
    </View>
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
  stickyFooter: {
    position: 'absolute',
    bottom: 36,
    right: 0,
    left: 0,
    alignItems: 'flex-end',
    marginEnd: 16,
    padding: 16,
  },
});

export default CategorySelector;
