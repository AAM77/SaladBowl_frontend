import React, { Component } from 'react';
import { Styles } from './OptionsContainerStyles.js';
import { connect } from 'react-redux';
import { getAllSaladBowls } from '../../actions/salad_bowls.js';
import SaladBowls from './SaladBowls.js';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { setMealType } from '../../actions/mealType.js';

class OptionsContainer extends Component {

  componentDidMount() {
    this.props.getAllSaladBowls();
  }

  handleSaladSelectionClick = (event, mealType) => {
    event.preventDefault();
    this.props.setMealType(mealType);
    this.props.history.push('/options')
  }

  mealSelection = () => {
    let selectedMealBowls;

    if (this.props.mealType === "breakfast") {
      selectedMealBowls = this.props.allBreakfastBowls
    } else if (this.props.mealType === "lunch") {
      selectedMealBowls =  this.props.allLunchBowls
    } else if (this.props.mealType === "dinner") {
      selectedMealBowls =  this.props.allDinnerBowls
    }

    return <SaladBowls saladBowls={selectedMealBowls} />
  }

  mealButtons = () => {
    return(
      <div class="meal-buttons">
      <ButtonToolbar>
        <Button variant="warning" onClick={(event) => this.handleSaladSelectionClick(event, 'breakfast')}>Show Breakfast Salads</Button>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <Button variant="warning" onClick={(event) => this.handleSaladSelectionClick(event, 'lunch')}>Show Lunch Salads</Button>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <Button variant="warning" onClick={(event) => this.handleSaladSelectionClick(event, 'dinner')}>Show Dinner Salads</Button>
      </ButtonToolbar>
      </div>
    )
  }

  render() {
    return(
      <Styles>
        {
          this.props.mealType ? this.mealSelection() : <>{this.mealButtons()}</>
        }
      </Styles>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mealType: state.mealType,
    allSaladBowls: state.saladBowls,
    allBreakfastBowls: state.saladBowls.filter( saladBowl => saladBowl.meal_time_frame === 'breakfast'),
    allLunchBowls: state.saladBowls.filter( saladBowl => saladBowl.meal_time_frame === 'lunch'),
    allDinnerBowls: state.saladBowls.filter( saladBowl => saladBowl.meal_time_frame === 'dinner')
  }
}

export default connect(mapStateToProps, { getAllSaladBowls, setMealType }) (OptionsContainer);
