/////////////////////////////////
// Synchronous Action Creators //
/////////////////////////////////

export const updateAccount = (userDetails) => {
  return {
    type: 'UPDATE_USER_ACCOUNT',
    userDetails
  }
}


//////////////////////////////////
// Asynchronous Action Creators //
//////////////////////////////////

export const updateAccountDetails = (accountDetails, userId, history) => {
  return dispatch => {
    // debugger;
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
      }
    })
    .catch(console.log)
  }
}
