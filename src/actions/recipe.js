//////////////////////////////////
// Asynchronous Action Creators //
//////////////////////////////////

export const createNewRecipe = (recipeFormData, history) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/salad_bowls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeFormData)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        history.push('/options')
        alert("Successfully submitted the recipe.")
      }
    })
  }
}
