import React, { Component } from 'react';
import { Styles } from './OptionsContainerStyles.js';
import { connect } from 'react-redux';
import { getAllSaladBowls } from '../../actions/salad_bowls.js';
import SaladBowls from './SaladBowls.js';

class OptionsContainer extends Component {

  componentDidMount() {
    this.props.getAllSaladBowls();
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

  render() {
    return(
      <Styles>
        {
          this.props.mealType ? this.mealSelection() : <p>Loading Salad Bowls</p>
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

export default connect(mapStateToProps, { getAllSaladBowls }) (OptionsContainer);
