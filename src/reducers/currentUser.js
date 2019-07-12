const initialState = {
  currentUser: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {...state, currentUser: action.user}
    case "LOGOUT_CURRENT_USER":
      return {...state, currentUser: ""}
    default:
      return state
  }
}
