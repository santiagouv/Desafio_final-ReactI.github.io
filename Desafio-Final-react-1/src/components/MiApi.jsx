import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';
import Pokemon from './Pokemon';
import { Container } from 'react-bootstrap';

const MiApi = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la red fue erronea');
        }
        return response.json();
      })
      .then(data => setPokemons(data.results))
      .catch(error => setError(true));
  }, []);

  const handleSelectPokemon = (pokemonName) => {
    setError(false); 

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          setError(true);
          setSelectedPokemon(null);
          return Promise.reject('La respuesta de la red fue erronea');
        }
        return response.json();
      })
      .then(details => {
        setSelectedPokemon(details);
        setError(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setError(true);
        setSelectedPokemon(null);
      });
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 style={{ color: 'white' }}>Pokédex</h1>
      <Buscador data={pokemons} onSelectPokemon={handleSelectPokemon} />
      {error && <div>Error al cargar los detalles del Pokémon.</div>}
      {!error && selectedPokemon ? <Pokemon details={selectedPokemon} /> : <div>Analisando Pokémon...</div>}
    </Container>
  );
};

export default MiApi;