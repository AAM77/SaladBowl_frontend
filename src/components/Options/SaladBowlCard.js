import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SaladBowlCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handleVoteClick = (event) => {

    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    })
  }
  ingredients = () => this.props.saladBowl.ingredients.map( ingredient => <div key={ingredient.id}>{ingredient.name}</div>)

  render() {
    return(
      <div>
        <h4>{this.props.saladBowl.name}</h4>
        <br />
        <div>
          {() => this.ingredients()}
        </div>
        <break />

        <Button onClick={(event) => this.handleVoteClick(event)}>Upvote</Button>
        <p>{this.state.counter} Votes</p>
      </div>
    )
  }
}

export default SaladBowlCard;
