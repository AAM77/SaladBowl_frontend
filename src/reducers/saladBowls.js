const initialState = {
  breakfastBowls: [],
  lunchBowls: [],
  dinnerBowls: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_SALAD_BOWLS':
      return {
        ...state,
        breakfastBowls: action.saladBowls.filter(saladBowl => saladBowl.meal_time_frame === 'breakfast'),
        lunchBowls: action.saladBowls.filter(saladBowl => saladBowl.meal_time_frame === 'lunch'),
        dinnerBowls: action.saladBowls.filter(saladBowl => saladBowl.meal_time_frame === 'dinner')
      }
    default:
      return state
  }
}
