import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Dashboard from './dashboard/Dashboard';
import './App.css';
import React from 'react';

const startingCards = [
  {
    id: 1,
    title: 'Plan your work',
    description: 'Organise projects and know what needs your attention.',
    icon: '✦'
  },
  {
    id: 2,
    title: 'Track progress',
    description: 'See what is done, what is next, and what needs help.',
    icon: '↗'
  },
  {
    id: 3,
    title: 'Work together',
    description: 'Keep your team and your tasks in one simple place.',
    icon: '◎'
  }
];

function App() {
  const [page, setPage] = useState('website');
  const [cards, setCards] = useState(startingCards);

  function addCard(newCard) {
    setCards([...cards, { ...newCard, id: Date.now() }]);
  }

  function deleteCard(cardId) {
    setCards(cards.filter((card) => card.id !== cardId));
  }

  if (page === 'dashboard') {
    return (
      <Dashboard
        cards={cards}
        addCard={addCard}
        deleteCard={deleteCard}
        goToWebsite={() => setPage('website')}
      />
    );
  }

  return (
    <>
      <Header goToDashboard={() => setPage('dashboard')} />
      <main>
        <Hero />
        <FeatureCards cards={cards} />
        <CTA />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;