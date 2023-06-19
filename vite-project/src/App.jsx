import React, { useState } from "react";

function App() {
  // State to store the sentence
  const [sentence, setSentence] = useState("");

  // Event handler for input change
  const handleInputChange = (e) => {
    setSentence(e.target.value);
  };

  // Event handler for deleting the sentence
  const handleDeleteSentence = () => {
    setSentence("");
  };

  //do the word count
  const wordCount = sentence.split(" ").filter((word) => word !== "").length;

  //do the word count starting with 'A'
  const wordCountStartingWithA = sentence
    .split(" ")
    .filter((word) => word !== "")
    .filter((word) => word.toLowerCase().startsWith("a")).length;

  //do the word count starting with 'Z'
  const wordCountStartingWithZ = sentence
    .split(" ")
    .filter((word) => word !== "")
    .filter((word) => word.toLowerCase().startsWith("z")).length;

  //do the first character of the sentence
  const firstCharacter = sentence.length > 0 ? sentence[0] : "?";

  //do the last character of the sentence
  const lastCharacter = sentence.length > 0 ? sentence[sentence.length - 1] : "?";

  //do the sentence in reverse
  const sentenceReversed = sentence.split("").reverse().join("");

  return (
    <div>
      <h1 className="title">Word counter</h1>
      <main className="main">
        {/* Input field */}
        <input
          className="input"
          placeholder="Enter a sentence"
          value={sentence}
          onChange={handleInputChange}
        />

        {/* Delete sentence button */}
        <button onClick={handleDeleteSentence}>Delete sentence</button>

        {/* Word quantity */}
        <h3>Word quantity: {wordCount}</h3>

        {/* Word quantity starting with 'A' */}
        <h3>Word quantity (starting with A): {wordCountStartingWithA}</h3>

        {/* Word quantity starting with 'Z' */}
        <h3>Word quantity (starting with Z): {wordCountStartingWithZ}</h3>

        {/* First character of the sentence */}
        <h3>First character of sentence: {firstCharacter}</h3>

        {/* Last character of the sentence */}
        <h3>Last character of sentence: {lastCharacter}</h3>

        {/* Sentence in reverse */}
        <h3>Sentence in reverse: {sentenceReversed}</h3>
      </main>
    </div>
  );
}

export default App;