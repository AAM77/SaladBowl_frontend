const initialState = {
  username: "",
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  address: "",
  zipcode: ""
}


export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData
    default:
      return state
  }
}
