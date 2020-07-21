import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  handleHpChange = event => {
    this.setState({
      hp: event.target.value
    })
  }
  
  handleFrontImgChange = event => {
    this.setState({
      frontUrl: event.target.value
    })
  }
  handleBackImgChange = event => {
    this.setState({
      backUrl: event.target.value
    })
  }
  

  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={event => this.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid type="text" onChange={ event => this.handleNameChange(event)} label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input fluid type="text" onChange={ event => this.handleHpChange(event)} label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid type="text" onChange={ event => this.handleFrontImgChange(event)} label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input fluid type="text" onChange={ event => this.handleBackImgChange(event)} label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
