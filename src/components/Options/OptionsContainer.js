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

    if (this.props.mealType === "Breakfast") {
      selectedMealBowls = this.props.allBreakfastBowls
    } else if (this.props.mealType === "Lunch") {
      selectedMealBowls =  this.props.allLunchBowls
    } else if (this.props.mealType === "Dinner") {
      selectedMealBowls =  this.props.allDinnerBowls
    }

    return (
      <div>
        <h1>{this.props.mealType} Bowls</h1>
        <SaladBowls saladBowls={selectedMealBowls} />
      </div>
    )
  }

  mealButtons = () => {
    return(
      <div className="meal-buttons">
      <ButtonToolbar>
        <Button variant="warning" onClick={(event) => this.handleSaladSelectionClick(event, 'Breakfast')}>Show Breakfast Salads</Button>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <Button variant="warning" onClick={(event) => this.handleSaladSelectionClick(event, 'Lunch')}>Show Lunch Salads</Button>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <Button variant="warning" onClick={(event) => this.handleSaladSelectionClick(event, 'Dinner')}>Show Dinner Salads</Button>
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
    allBreakfastBowls: state.saladBowls.breakfastBowls,
    allLunchBowls: state.saladBowls.lunchBowls,
    allDinnerBowls: state.saladBowls.dinnerBowls
  }
}

export default connect(mapStateToProps, { getAllSaladBowls, setMealType }) (OptionsContainer);
