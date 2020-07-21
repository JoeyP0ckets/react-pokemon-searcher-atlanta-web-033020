import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  constructor() {
    super()
    this.state = {
      isLoading: true,
      cardFront: true
    }
  }
  
  handleClick = () => {
    this.setState({
      cardFront: !this.state.cardFront
    })
  }
  
  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.cardFront ? this.props.frontSprite : this.props.backSprite}alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
