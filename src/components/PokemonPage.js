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
    front: '',
    back: ''
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
  
  handleSubmit = () => {
    console.log("I was clicked")
    let { name, hp, front, back} = this.state
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        hp,
        front,
        back
      })
    })
      .then(resp => resp.json())
      .then(newPokemon => console.log(newPokemon))
  }

  
  
  
  render() {
    console.log(this.state)
    let { name, hp, front, back } = this.state
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          name={name}
          hp={hp}
          fron={front}
          back={back}/>
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemonData={this.state.searchedPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
