/////////////////////////////////
// Synchronous Action Creators //
/////////////////////////////////

export const updateAccount = (accountDetails) => {
  return {
    type: 'UPDATE_USER_ACCOUNT',
    accountDetails
  }
}

//////////////////////////////////
// Asynchronous Action Creators //
//////////////////////////////////

export const updateAccountDetails = (accountDetails, userId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(accountDetails)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(updateAccount(response))
        alert("ACCOUNT DETAILS SUCCESSFULLY UPDATED!")
      }
    })
    .catch(console.log)
  }
}
