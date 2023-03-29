// import { useState } from "react";
import Flashcard from './Flashcard';

export default function FlashcardList({ questions }) {
  const flashcards = questions.map((question) => 
    <Flashcard front={question.front} back={question.back}></Flashcard>
  );

  return <div> {flashcards} </div>;
}