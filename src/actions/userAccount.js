import { resetForm } from './resetForm.js';
import { setCurrentUser } from './session.js';

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
          dispatch(setCurrentUser(response))
          dispatch(resetForm())
          history.push(`/users/${response.id}`)
        }
      })
      .catch(console.log)
    }
  }

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
        alert(response.error);
      } else {
        dispatch(updateAccount(response))
        alert("ACCOUNT DETAILS SUCCESSFULLY UPDATED!")
      }
    })
    .catch(console.log)
  }
}

export const deleteAccount = (userId, history) => {
  return dispatch => {
    return fetch( `http://localhost:3001/api/v1/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error);
      } else {
        history.push('/');
        alert('Account deleted!');
      }
    })
    .catch(console.log)
  }
}
