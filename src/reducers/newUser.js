export default (state = null, action) => {
  switch (action.type) {
    case "CREATE_NEW_USER":
      return action.user
    default:
      return state
  }
}
