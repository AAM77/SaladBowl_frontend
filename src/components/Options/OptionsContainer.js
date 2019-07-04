import React, { Component } from 'react';
//import { Container, Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Styles } from './OptionsContainerStyles.js';
import { connect } from 'react-redux';
import { getAllSaladBowls } from '../../actions/salad_bowls.js';
import BreakfastSaladBowls from './BreakfastSaladBowls.js';
import LunchSaladBowls from './BreakfastSaladBowls.js';
import DinnerSaladBowls from './BreakfastSaladBowls.js';

class OptionsContainer extends Component {

  componentDidMount() {
    this.props.getAllSaladBowls();
  }

  mealSelection = () => {
    let renderedComponent;

    if (this.props.mealType === "breakfast") {
      renderedComponent = <BreakfastSaladBowls allBreakfastBowls={this.props.allBreakfastBowls} />
    } else if (this.props.mealType === "lunch") {
      renderedComponent =  <LunchSaladBowls allLunchBowls={this.props.allLunchBowls} />
    } else if (this.props.mealType === "dinner") {
      renderedComponent =  <DinnerSaladBowls allDinnerBowls={this.props.allDinnerBowls}  />
    } else {
      renderedComponent = <h1>No Meals</h1>
    }

    return renderedComponent
  }

  render() {
    return(
      <Styles>
        {this.mealSelection()}

        <div>
          {
            this.props.allSaladBowls ?
            <ul>

            </ul> :
            <p>Loading All Salad Bowls</p>
          }
        </div>
      </Styles>
    )
  }
}
//
// {
//   this.props.allBreakfastBowls ?
//   <div className="rows-and-columns">
//     <Container>
//       <Row className="row-of-columns">
//         {this.breakfastBowls()}
//       </Row>
//     </Container>
//   </div> :
//   <p>Loading items</p>
// }

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
