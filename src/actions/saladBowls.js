
/////////////////////////////////
// Synchronous Action Creators //
/////////////////////////////////

export const allSaladBowls = (saladBowls) => {
  return {
          type: 'GET_ALL_SALAD_BOWLS',
          saladBowls
         }
}




//////////////////////////////////
// Asynchronous Action Creators //
//////////////////////////////////

export const getAllSaladBowls = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/salad_bowls')
      .then( r => r.json())
      .then( response => {
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response)
          dispatch(allSaladBowls(response))
        }
      }
    )
  }
}
