import { resetForm } from './resetForm.js';
import { setCurrentUser } from './currentUser.js';

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

export const signup = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/register", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then( response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(createNewUser(response))
          debugger;
          dispatch(setCurrentUser(response))
          dispatch(resetForm())
          history.push(`/users/${response.id}`)
        }
      })
      .catch(console.log)
    }
  }
