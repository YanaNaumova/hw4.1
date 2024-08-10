import { useState } from "react";

function Answer({ updatePoints, message }) {
  const [antwort, setAntwort] = useState("");

  function antworten(newAntwort) {
    setAntwort(newAntwort);
  }

  function handelAntwort(event) {
    event.preventDefault();
    updatePoints(antwort);
    setAntwort("");
  }

  return (
    <form onSubmit={(event) => handelAntwort(event, antwort)}>
      <input
        type="text"
        onChange={(event) => antworten(event.target.value)}
        value={antwort}
      />
      <input type="submit" value="Проверить" />
      <p>{message}</p>
    </form>
  );
}

export default Answer;
