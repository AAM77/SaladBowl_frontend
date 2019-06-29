/////////////////////////////////
// Synchronous Action Creators //
/////////////////////////////////
export const createNewUser = user => {
  return {
    type: "CREATE_NEW_USER",
    user
  }
}

//////////////////////////////////
// Asynchronous Action Creators //
//////////////////////////////////

export const signup = (credentials) => {
  console.log(credentials)
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(createNewUser(user))
        }
      })
      .catch(console.log)
    }
  }
