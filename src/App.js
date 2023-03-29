import './App.css';
import FlashcardBuilder from './FlashcardBuilder';
import FlashcardList from './FlashcardList';
import { useState } from "react";

function App() {
  const [questions, setQuestions] = 
    useState([{front: "Capital of Bulgaria", back:"Sofia"},
              {front: "Official language of Nigeria", back:"English"},
              {front: "Most populous city in Brazil", back:"São Paulo"},]);
  
  function onAdd(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setQuestions(questions.concat({
      front: formJson.front,
      back: formJson.back
    }));
  }

  return (
    <div className="App">
      <h1> Geography Flashcards Builder </h1>
      <FlashcardList questions={questions}></FlashcardList>
      <FlashcardBuilder onAdd={onAdd}></FlashcardBuilder>
    </div>
  );
}

export default App;
