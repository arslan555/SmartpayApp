import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import Button from '../components/ui/Button';
import Label from '../components/ui/Label';
import { Bank } from '../types/Bank';

interface BankSelectorProps {
  banks: Bank[];
  selectedBanks: string[];
  onBanksSelected: (bankIds: string[]) => void;
  onNext: () => void;
}

export default function BankSelector({
  banks,
  selectedBanks,
  onBanksSelected,
  onNext,
}: BankSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBanks = searchTerm
    ? banks.filter((bank) =>
        bank.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : banks;

  const toggleBankSelection = (bankId: string) => {
    const updated = selectedBanks.includes(bankId)
      ? selectedBanks.filter((id) => id !== bankId)
      : [...selectedBanks, bankId];
    onBanksSelected(updated);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Label>Search Banks</Label>
        <TextInput
          placeholder="Type to search..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.input}
        />
      </View>

      <View style={styles.section}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Label>Select your banks</Label>
          <Pressable onPress={() => onBanksSelected([])} hitSlop={8}>
            <Text style={{ fontSize: 13, color: '#2563EB', textDecorationLine: 'underline' }}>Reset</Text>
          </Pressable>
        </View>
        <FlatList
          data={filteredBanks}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ gap: 12 }}
          renderItem={({ item }) => {
            const selected = selectedBanks.includes(item.id);
            return (
              <Pressable
                onPress={() => toggleBankSelection(item.id)}
                style={[styles.card, selected && styles.cardSelected]}
              >
                <View style={styles.cardInner}>
                  <View style={styles.logoWrapper}>
                    <Image
                      source={{ uri: item.logo }}
                      style={styles.logo}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>

      <View style={styles.footer}>
        <Button
          title="Next: Select Cards"
          onPress={onNext}
          disabled={selectedBanks.length === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
  },
  section: {
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
    flex: 1,
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
    alignItems: 'center',
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
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    flexShrink: 1,
  },
  footer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
});
