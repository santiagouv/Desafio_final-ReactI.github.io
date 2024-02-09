import React from 'react';
import { Card } from 'react-bootstrap';

const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
  stellar: '#9DB7F5'
};

const Pokemon = ({ details }) => {
  if (!details) return <div>Cargando...</div>;
  const mainType = details.types[0].type.name;
  const typeColor = typeColors[mainType] || '#68A090';

  const cardStyle = {
    width: '18rem',
    margin: '20px auto',
    border: `4px solid ${typeColor}`,
    boxShadow: `0 0 10px ${typeColor}`
  };

  return (
    <Card style={cardStyle}> {}
      <Card.Img variant="top" src={details.sprites.front_default} />
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>ID: {details.id}</Card.Text>
        <Card.Text>
          Tipo(s): {details.types.map(typeInfo => typeInfo.type.name).join(', ')}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;
