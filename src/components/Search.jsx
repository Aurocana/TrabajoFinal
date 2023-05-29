import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [characters, setCharacters] = useState("");

  let hangedleChan = (event) => {
    setCharacters(event.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(characters);
      }}
    >
      <label htmlFor="">Busca tu Pelicula</label>
      <br />
      <input type="text" onChange={handleChange} />
      <button onClick={onSearch}>Search</button>
    </form>
  );
}
