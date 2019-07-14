export const updateAccountForm = formData => {
  return {
    type: 'UPDATE_ACCOUNT_FORM',
    formData
  }
}

export const updateLoginForm = formData => {
  return {
    type: "UPDATE_LOGIN_FORM",
    formData
  }
}

export const updateSignupForm = formData => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}
