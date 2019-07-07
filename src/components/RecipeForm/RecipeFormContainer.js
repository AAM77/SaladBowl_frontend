import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import { Styles } from './RecipeFormContainerStyles.js';
import { connect } from 'react-redux';
import { updateRecipeForm } from '../../actions/recipeForm.js';
import { createNewRecipe } from '../../actions/recipe.js';
// import { withRouter } from 'react-router-dom';



class RecipeFormContainer extends Component {

  handleOnChange = (event) => {
    const { name, value } = event.target;

    const updatedRecipeForm = {
      ...this.props.recipeFormData,
      [name]: value
    }

    this.props.updateRecipeForm(updatedRecipeForm)
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createNewRecipe(this.props.recipeFormData, this.props.history)
  }

  render() {
    return(
      <Styles>
        <h3>Submit a New Salad Bowl Recipe</h3>
        <div className="recipe-form">
          <Form onSubmit={(event) => this.handleOnSubmit(event)}>

            <Form.Group controlId="formBasicRecipeName">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control placeholder="Enter a recipe name" value={undefined} name="name" type="text" onChange={(event) => this.handleOnChange(event)} required/>
            </Form.Group>

            <Form.Group controlId="formBasicUrl">
              <Form.Label>URL</Form.Label>
              <Form.Control placeholder="Recipe URL" value={undefined} name="url" type="text" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Meal Type</Form.Label>
              <Form.Control as="select" placeholder="Select Meal Type" name="meal_time_frame" onChange={(event) => this.handleOnChange(event)} required>
                <option value="">Select One</option>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCalories">
              <Form.Label>Calories</Form.Label>
              <Form.Control placeholder="Calories per serving" value={undefined} name="calories" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicFat">
              <Form.Label>Total Fat</Form.Label>
              <Form.Control placeholder="Total Fat per serving" value={undefined} name="fat" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicCholesterol">
              <Form.Label>Cholesterol</Form.Label>
              <Form.Control placeholder="Cholesterol per serving" value={undefined} name="cholesterol" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicSodium">
              <Form.Label>Sodium</Form.Label>
              <Form.Control placeholder="Sodium per serving" value={undefined} name="sodium" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicCarbohydrates">
              <Form.Label>Carbohydrates</Form.Label>
              <Form.Control placeholder="Carbohydrates" value={undefined} name="carbohydrates" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicSugar">
              <Form.Label>Sugars</Form.Label>
              <Form.Control placeholder="Sugars per serving" value={undefined} name="sugar" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicFiber">
              <Form.Label>Fiber</Form.Label>
              <Form.Control placeholder="Fiber per serving" value={undefined} name="fiber" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicProtein">
              <Form.Label>Protein</Form.Label>
              <Form.Control placeholder="Protein per serving" value={undefined} name="protein" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
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

const mapStateToProps = (state) => {
  return { recipeFormData: state.recipeForm }
}

export default connect(mapStateToProps, { updateRecipeForm, createNewRecipe })(RecipeFormContainer)
