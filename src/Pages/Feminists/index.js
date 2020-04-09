import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

export default function Feminists() {
  const feminists = useSelector((state) => state.feminists);

  function renderCards() {
    return feminists.length
      ? feminists.map((f) => <Card key={f.id} feminist={f} />)
      : console.log('We still be fetching');
  }
  return <div id="people-cards">{renderCards()}</div>;
}
