export default (state = null, action) => {
  switch (action.type) {
    case 'CREATE_NEW_SALAD_BOWL':
      return action.recipeData
    default:
      return state
  }
}
