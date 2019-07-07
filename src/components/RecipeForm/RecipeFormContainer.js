import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import { Styles } from './RecipeFormContainerStyles.js';
// import { connect } from 'react-redux';
// import { getCurrentUser } from '../../actions/currentUser.js';
// import { withRouter } from 'react-router-dom';



class RecipeFormContainer extends Component {

  render() {
    return(
      <Styles>
        <div className="recipe-form">
          <Form onSubmit={undefined}>

            <Form.Group controlId="formBasicRecipeName">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control placeholder="Enter a recipe name" value={undefined} name="recipeName" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="formBasicUrl">
              <Form.Label>URL</Form.Label>
              <Form.Control placeholder="Recipe URL" value={undefined} name="recipeName" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>breakfast</option>
                <option>lunch</option>
                <option>dinner</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCalories">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control placeholder="Calories per serving" value={undefined} name="calories" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="formBasicFat">
              <Form.Label>Total Fat</Form.Label>
              <Form.Control placeholder="Total Fat per serving" value={undefined} name="totalFat" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="formBasicCholesterol">
              <Form.Label>Cholesterol</Form.Label>
              <Form.Control placeholder="Cholesterol per serving" value={undefined} name="cholesterol" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="formBasicSodium">
              <Form.Label>Sodium</Form.Label>
              <Form.Control placeholder="Sodium per serving" value={undefined} name="sodium" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="formBasicCarbohydrates">
              <Form.Label>Carbohydrates</Form.Label>
              <Form.Control placeholder="Carbohydrates" value={undefined} name="carbohydrates" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="formBasicSugar">
              <Form.Label>Sugars</Form.Label>
              <Form.Control placeholder="Sugars per serving" value={undefined} name="sugars" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="formBasicFiber">
              <Form.Label>Fiber</Form.Label>
              <Form.Control placeholder="Fiber per serving" value={undefined} name="fiber" type="text" onChange={undefined} />
            </Form.Group>

            <Form.Group controlId="formBasicProtein">
              <Form.Label>Protein</Form.Label>
              <Form.Control placeholder="Protein per serving" value={undefined} name="protein" type="text" onChange={undefined} />
            </Form.Group>

            <Button variant="primary" value="Submit Recipe" type="submit">
              Submit Recipe
            </Button>
          </Form>

          <br />

        </div>
      </Styles>
    )
  }
}

export default RecipeFormContainer
