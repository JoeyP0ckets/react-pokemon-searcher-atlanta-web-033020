import React from 'react'
import { Form } from 'semantic-ui-react'

 const PokemonForm = (props) => {
    console.log(props)
  
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid type="text" onChange={props.handleChange} label="Name" placeholder="Name" name="name" value={props.name} />
            <Form.Input fluid type="text" onChange={props.handleChange} label="hp" placeholder="hp" name="hp" value={props.hp}/>
            <Form.Input fluid type="text" onChange={props.handleSpritesChange} label="Front Image URL" placeholder="url" name="front" value={props.sprites.front}/>
            <Form.Input fluid type="text" onChange={props.handleSpritesChange} label="Back Image URL" placeholder="url" name="back" value={props.sprites.back}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }


export default PokemonForm
