import React from "react";
import { getCharacters } from "@/app/lib/characters";

async function Card() {
  const characters = await getCharacters();
  const charactersData = characters.results;
  return (
    <div className="flex-container">
      {charactersData.map((character, index) => (
        <div className="card">
          <h2 key={index}>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <ul>
            <li><span>Status:</span> {character.status}</li>
            <li><span>Species:</span> {character.species}</li>
          </ul>
        </div>  
      ))}
    </div>
  );;
}

export default Card;
