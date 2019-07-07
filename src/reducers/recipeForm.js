const initialState = {
  name: "",
  meal_time_frame: "",
  url: "",
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

export default (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_RECIPE_FORM':
      return action.recipeData
    case "RESET_FORM":
      return initialState
    default:
      return state
  }
}
