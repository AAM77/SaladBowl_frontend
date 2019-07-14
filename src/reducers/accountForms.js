const initialState = {
  updateForm: {},
  loginForm: {},
  signupForm: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACCOUNT_FORM':
      return {...state, updateForm: action.formData}
    case "UPDATE_LOGIN_FORM":
      return {...state, loginForm: action.formData}
    case "UPDATE_SIGNUP_FORM":
      return {...state, signupForm: action.formData}
    case "RESET_FORM":
      return initialState
    default:
      return state
  }
}
