import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Styles } from './RecipeFormContainerStyles.js';
import { connect } from 'react-redux';
import { updateRecipeForm } from '../../actions/recipeForm.js';
import { createNewRecipe } from '../../actions/recipe.js';


class RecipeFormContainer extends Component {

  handleOnChange = (event) => {
    const { name, value } = event.target;

    const updatedRecipeForm = {
      ...this.props.recipeData,
      [name]: value
    }
    this.props.updateRecipeForm(updatedRecipeForm)
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createNewRecipe(this.props.recipeData, this.props.history)
  }

  render() {
    return(
      <Styles>
        <h3>Submit a New Salad Bowl Recipe</h3>
        <div className="recipe-form">
          <Form onSubmit={(event) => this.handleOnSubmit(event)}>

            <Form.Group controlId="formBasicRecipeName">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control placeholder="Enter a recipe name" value={this.props.recipeData.name} name="name" type="text" onChange={(event) => this.handleOnChange(event)} required/>
            </Form.Group>

            <Form.Group controlId="formBasicUrl">
              <Form.Label>URL</Form.Label>
              <Form.Control placeholder="Recipe URL" value={this.props.recipeData.url} name="url" type="text" onChange={(event) => this.handleOnChange(event)} />
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
              <Form.Control placeholder="Calories per serving" value={this.props.recipeData.calories} name="calories" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicFat">
              <Form.Label>Total Fat</Form.Label>
              <Form.Control placeholder="Total Fat per serving" value={this.props.recipeData.fat} name="fat" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicCholesterol">
              <Form.Label>Cholesterol</Form.Label>
              <Form.Control placeholder="Cholesterol per serving" value={this.props.recipeData.cholesterol} name="cholesterol" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicSodium">
              <Form.Label>Sodium</Form.Label>
              <Form.Control placeholder="Sodium per serving" value={this.props.recipeData.sodium} name="sodium" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicCarbohydrates">
              <Form.Label>Carbohydrates</Form.Label>
              <Form.Control placeholder="Carbohydrates" value={this.props.recipeData.carbohydrates} name="carbohydrates" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicSugar">
              <Form.Label>Sugars</Form.Label>
              <Form.Control placeholder="Sugars per serving" value={this.props.recipeData.sugar} name="sugar" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicFiber">
              <Form.Label>Fiber</Form.Label>
              <Form.Control placeholder="Fiber per serving" value={this.props.recipeData.fiber} name="fiber" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicProtein">
              <Form.Label>Protein</Form.Label>
              <Form.Control placeholder="Protein per serving" value={this.props.recipeData.protein} name="protein" type="number" step="0.01" onChange={(event) => this.handleOnChange(event)} />
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
  return { recipeData: state.recipeForm.recipeDetails }
}

export default connect(mapStateToProps, { updateRecipeForm, createNewRecipe })(RecipeFormContainer)
