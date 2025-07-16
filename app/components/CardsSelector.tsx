// ✅ components/CardSelector.tsx (React Native version with sticky footer)
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { CreditCard } from '../types/CreditCard';
import Button from '../components/ui/Button';
import Label from '../components/ui/Label';
import Badge from '../components/ui/Badge';

interface CardSelectorProps {
  cards: CreditCard[];
  selectedCards: string[];
  onCardsSelected: (cardIds: string[]) => void;
  onBack?: () => void;
  onSave: () => void;
}

export default function CardSelector({
  cards,
  selectedCards,
  onCardsSelected,
  onBack,
  onSave,
}: CardSelectorProps) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCards = searchTerm
    ? cards.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cards;

  const toggleCardSelection = (cardId: string) => {
    const updated = selectedCards.includes(cardId)
      ? selectedCards.filter((id) => id !== cardId)
      : [...selectedCards, cardId];
    onCardsSelected(updated);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Label>Search Cards</Label>
            <Pressable onPress={() => onCardsSelected([])} hitSlop={8}>
              <Text style={{ fontSize: 13, color: '#2563EB', textDecorationLine: 'underline' }}>Reset</Text>
            </Pressable>
          </View>
          <TextInput
            placeholder="Type to search..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={styles.input}
          />
        </View>

        <FlatList
          data={filteredCards}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 16, gap: 12 }}
          renderItem={({ item }) => {
            const selected = selectedCards.includes(item.id);
            return (
              <Pressable
                onPress={() => toggleCardSelection(item.id)}
                style={[styles.card, selected && styles.cardSelected]}
              >
                <View style={styles.cardInner}>
                  <View style={styles.logoWrapper}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.logo}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.bankName}>{item.bankId}</Text>
                    <View style={styles.badgesWrap}>
                      {Object.entries(item.cashbackRate)
                        .filter(([_, rate]) => rate >= 3)
                        .map(([category, rate]) => (
                          <Badge
                            key={`${item.id}-${category}`}
                            label={`${category} ${rate}%`}
                          />
                        ))}
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyWrap}>
              <Text style={styles.emptyText}>No cards found that match your search</Text>
            </View>
          }
        />

        <View style={styles.footer}>
          <Button
            title="Save My Cards"
            onPress={onSave}
            disabled={selectedCards.length === 0}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 16,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  cardSelected: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  logoWrapper: {
    width: 48,
    height: 48,
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 28,
    height: 28,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
  },
  bankName: {
    fontSize: 13,
    color: '#6B7280',
  },
  badgesWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 6,
  },
  emptyWrap: {
    paddingVertical: 48,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D1D5DB',
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  emptyText: {
    color: '#6B7280',
  },
  footer: {
    marginTop: 20,
    marginEnd: 16,
    marginBottom: 16,
    alignItems: 'flex-end',
  },
});
