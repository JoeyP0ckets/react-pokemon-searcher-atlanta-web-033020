import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import FuzzySearch from 'fuzzy-search'

class PokemonPage extends React.Component {
  
  state = {
    isLoading: true,
    pokemonData: [],
    searchedPokemon: []
  }
  
  componentDidMount() {
    let baseUrl = "http://localhost:3000/pokemon"
    fetch(baseUrl)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          isLoading: false,
          pokemonData: data,
          searchedPokemon: data
        })
      }
      )
  }
  searchPokemon = (event) => {
    let searcher = new FuzzySearch(this.state.pokemonData, ['name'])
    let result = searcher.search(event.target.value)
    this.setState({
      searchedPokemon: result
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemonData={this.state.searchedPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
