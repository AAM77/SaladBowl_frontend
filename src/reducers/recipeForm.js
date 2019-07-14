const initialState = {
  recipeDetails: {
    name: "",
    url: "",
    meal_time_frame: "",
    calories: "",
    fat: "",
    cholesterol: "",
    sodium: "",
    carbohydrates: "",
    sugar: "",
    fiber: "",
    protein: "",
    favorite: false
  }
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_RECIPE_FORM':
      return {...state, recipeDetails: action.recipeData}
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}
