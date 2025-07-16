import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchBanks } from '../store/slices/banksSlice';
import { fetchCards } from '../store/slices/cardsSlice';
import BankSelector from '../components/BankSelector';
import CardSelector from '../components/CardsSelector';
import TopBar from '../components/TopBar';
import type { CreditCard } from '../types/CreditCard';

const SetupScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { banks, status: banksStatus } = useSelector((state: RootState) => state.banks);
  const { cards, status: cardsStatus } = useSelector((state: RootState) => state.cards);

  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [step, setStep] = useState<'banks' | 'cards'>('banks');

  useEffect(() => {
    dispatch(fetchBanks());
    dispatch(fetchCards());
  }, [dispatch]);

  const handleNextToCards = () => {
    setStep('cards');
  };

  const handleSaveCards = () => {
    console.log('Selected Cards:', selectedCards);
    // Navigate to next screen or store selection
  };

  const filteredCards: CreditCard[] = cards.filter(card => selectedBanks.includes(card.bankId));

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <TopBar title={step === 'banks' ? 'Select Your Bank' : 'Select Your Cards'} backgroundColor="#f3f4f6" />

      {step === 'banks' ? (
        <BankSelector
          banks={banks}
          selectedBanks={selectedBanks}
          onBanksSelected={setSelectedBanks}
          onNext={handleNextToCards}
        />
      ) : (
        <CardSelector
          cards={filteredCards}
          selectedCards={selectedCards}
          onCardsSelected={setSelectedCards}
          onBack={() => setStep('banks')}
          onSave={handleSaveCards}
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
});

export default SetupScreen;
