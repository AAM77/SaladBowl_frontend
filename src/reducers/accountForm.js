const initialState = {
  username: "",
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  address: "",
  zipcode: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACCOUNT_FORM':
      return action.accountData
    default:
      return state
  }
}
