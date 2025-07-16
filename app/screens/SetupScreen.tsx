import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchBanks } from '../store/slices/banksSlice';
import { fetchCards } from '../store/slices/cardsSlice';
import BankSelector from '../components/BankSelector';
import CardSelector from '../components/CardsSelector';
import CategoriesSelector from '../components/CategoriesSelector';
import TopBar from '../components/TopBar';
import Button from '../components/ui/Button';
import { categories } from '../data/categories';
import type { CreditCard } from '../types/CreditCard';

const SetupScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { banks, status: banksStatus } = useSelector((state: RootState) => state.banks);
  const { cards, status: cardsStatus } = useSelector((state: RootState) => state.cards);

  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [step, setStep] = useState<'banks' | 'cards' | 'categories'>('banks');

  useEffect(() => {
    dispatch(fetchBanks());
    dispatch(fetchCards());
  }, [dispatch]);

  const handleNextToCards = () => {
    setStep('cards');
  };

  const handleNextToCategories = () => {
    setStep('categories');
  };

  const handleFinishSetup = () => {
    console.log('Selected Banks:', selectedBanks);
    console.log('Selected Cards:', selectedCards);
    console.log('Selected Categories:', selectedCategories);
    // TODO: Navigate to main app/dashboard
  };

  const filteredCards: CreditCard[] = cards.filter(card => selectedBanks.includes(card.bankId));

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <TopBar
        title={
          step === 'banks'
            ? 'Select Your Bank'
            : step === 'cards'
            ? 'Select Your Cards'
            : 'Select Spending Categories'
        }
        backgroundColor="#f3f4f6"
        onBack={
          step === 'cards'
            ? () => setStep('banks')
            : step === 'categories'
            ? () => setStep('cards')
            : undefined
        }
      />

      {step === 'banks' && (
        <BankSelector
          banks={banks}
          selectedBanks={selectedBanks}
          onBanksSelected={setSelectedBanks}
          onNext={handleNextToCards}
        />
      )}
      {step === 'cards' && (
        <CardSelector
          cards={filteredCards}
          selectedCards={selectedCards}
          onCardsSelected={setSelectedCards}
          onSave={handleNextToCategories}
        />
      )}
      {step === 'categories' && (
        <>
          <CategoriesSelector
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoriesSelected={setSelectedCategories}
          />
          <View style={styles.footer}>
            <Button
              title="Continue"
              onPress={handleFinishSetup}
              disabled={selectedCategories.length === 0}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    marginTop: 20,
    alignItems: 'flex-end',
    marginEnd: 16,
    marginBottom: 16,
  },
});

export default SetupScreen;
