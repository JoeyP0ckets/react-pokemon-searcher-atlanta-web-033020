import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'



class PokemonCollection extends React.Component {
  
generatePokemonCard = () => {
  return this.props.pokemonData.map(pokemon => <PokemonCard
   key={pokemon.id}
   name={pokemon.name}
   frontSprite={pokemon.sprites.front} 
   backSprite={pokemon.sprites.back}
   hp={pokemon.hp}
  />)
}
  
  
  
  
  render() {
    // console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.generatePokemonCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
