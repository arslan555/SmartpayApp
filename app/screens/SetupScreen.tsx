import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchBanks } from '../store/slices/banksSlice';
import { fetchCards } from '../store/slices/cardsSlice';
import { fetchCategories } from '../store/slices/categoriesSlice';
import BankSelector from '../components/BankSelector';
import CardSelector from '../components/CardsSelector';
import CategoriesSelector from '../components/CategoriesSelector';
import TopBar from '../components/TopBar';
import LoadingScreen from '../components/ui/LoadingScreen';
import type { CreditCard } from '../types/CreditCard';

const SetupScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { banks, status: banksStatus, error: banksError } = useSelector((state: RootState) => state.banks);
  const { cards, status: cardsStatus, error: cardsError } = useSelector((state: RootState) => state.cards);
  const { categories, status: categoriesStatus, error: categoriesError } = useSelector((state: RootState) => state.categories);

  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [step, setStep] = useState<'banks' | 'cards' | 'categories'>('banks');

  useEffect(() => {
    dispatch(fetchBanks());
  }, [dispatch]);

  useEffect(() => {
    if (step === 'cards') {
      dispatch(fetchCards());
    }
  }, [step, dispatch]);

  useEffect(() => {
    if (step === 'categories') {
      dispatch(fetchCategories());
    }
  }, [step, dispatch]);

  // Handle errors
  useEffect(() => {
    if (banksError) {
      Alert.alert('Error', `Failed to load banks: ${banksError}`, [
        { text: 'Retry', onPress: () => dispatch(fetchBanks()) },
        { text: 'OK' }
      ]);
    }
  }, [banksError, dispatch]);

  useEffect(() => {
    if (cardsError) {
      Alert.alert('Error', `Failed to load cards: ${cardsError}`, [
        { text: 'Retry', onPress: () => dispatch(fetchCards()) },
        { text: 'OK' }
      ]);
    }
  }, [cardsError, dispatch]);

  useEffect(() => {
    if (categoriesError) {
      Alert.alert('Error', `Failed to load categories: ${categoriesError}`, [
        { text: 'Retry', onPress: () => dispatch(fetchCategories()) },
        { text: 'OK' }
      ]);
    }
  }, [categoriesError, dispatch]);

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

  // Show loading state
  if (step === 'banks' && banksStatus === 'loading') {
    return <LoadingScreen title="Select Your Bank" message="Loading banks..." />;
  }

  if (step === 'cards' && cardsStatus === 'loading') {
    return <LoadingScreen title="Select Your Cards" message="Loading cards..." />;
  }

  if (step === 'categories' && categoriesStatus === 'loading') {
    return <LoadingScreen title="Select Spending Categories" message="Loading categories..." />;
  }

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
        <CategoriesSelector
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoriesSelected={setSelectedCategories}
          onSave={handleFinishSetup}
        />
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
