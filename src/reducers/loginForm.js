const initialState = {
  
}


export default ( state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formData
    case "RESET_FORM":
      return initialState
    default:
      return state
  }
}
