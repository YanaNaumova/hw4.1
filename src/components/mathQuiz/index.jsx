import { useState } from "react";
import Answer from "../answer";

function MathQuiz() {
  const [useGameScore, setUseGameScore] = useState(0);
  const [message, setMessage] = useState("");
  let a = Math.floor(Math.random() * 1000);
  let b = Math.floor(Math.random() * 1000);

  function updatePoints(antwort) {
    let sum = a + b;
    if (isNaN(Number(antwort))) {
      setMessage("Пожалуйста введите число");
    } else if (sum === Number(antwort)) {
      setUseGameScore(useGameScore + 1);
      setMessage(" Вы выиграли, ваш счет увеличился на 1 очко");
    } else {
      setUseGameScore(useGameScore - 1);
      setMessage(" Вы проиграли, ваш счет уменьшился на 1 очко ");
    }
  }
  return (
    <div>
      <h1>Ваши очки: {useGameScore}</h1>
      <p>
        {a} + {b} =?
      </p>
      <Answer updatePoints={updatePoints} message={message} />
    </div>
  );
}
export default MathQuiz;
