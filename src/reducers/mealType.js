export default (state = null, action) => {
  switch (action.type) {
    case "SET_MEAL_TYPE":
      console.log(action)
      return action.mealType
    default:
      return state
  }
}
