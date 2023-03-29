import { useState } from "react";
import './Flashcard.css';

export default function Flashcard({ front, back }) {
  const [isFront, setIsFront] = useState(true);

  function handleClick() {
    setIsFront(!isFront);
  }

  if(isFront) {
    return (
      <div className="flashcard-front" onClick={handleClick}>
        {front}
      </div>
    );
  } else {
    return (
      <div className="flashcard-back" onClick={handleClick}>
        {back}
      </div>
    );
  }
}