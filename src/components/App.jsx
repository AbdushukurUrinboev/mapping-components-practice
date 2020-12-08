import React from "react";
import DataEmojipedia from "./data"
import Emoji from "./Emojipedia";

function createEmojipedia(emoji) {
  return (
    <Emoji
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  )
}

function App() {
  return (
    <div>
    <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      
    {DataEmojipedia.map(createEmojipedia)} </dl>

     
    </div>
  );
}

export default App;
