import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import FuzzySearch from 'fuzzy-search'

class PokemonPage extends React.Component {
  
  state = {
    pokemonData: [],
    searchedPokemon: [],
    name: '',
    hp: '',
    sprites: {
    front: '',
    back: ''
    }
  }
  
  componentDidMount() {
    let baseUrl = "http://localhost:3000/pokemon"
    fetch(baseUrl)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
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

  handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value
      })
  }

  handleSpritesChange = event => {
    this.setState({
      sprites: {
        ...this.state.sprites,
        [event.target.name]: event.target.value
      }
    })
  }
  
  handleSubmit = () => {
    // console.log("I was clicked")
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: parseInt(this.state.hp),
        sprites: this.state.sprites
      })
    })
      .then(resp => resp.json())
      .then(newPokemon => {
        this.setState({
          searchedPokemon: [...this.state.searchedPokemon, newPokemon]
        })
      })
  }

  
  
  
  render() {
    console.log(this.state)
    let { name, hp, sprites} = this.state
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          handleSpritesChange={this.handleSpritesChange}
          name={name}
          hp={hp}
          sprites={sprites}
          />
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemonData={this.state.searchedPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
