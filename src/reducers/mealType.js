export default (state = "", action) => {
  switch (action.type) {
    case "SET_MEAL_TYPE":
      return action.mealType
    default:
      return state
  }
}
