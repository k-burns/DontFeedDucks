import axios from 'axios'

const SET_SNACKS = 'SET_SNACKS'

const initialState = []

export const setSnacks = snacks => ({
  type: SET_SNACKS,
  snacks
})

export const fetchSnacks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/snacks')
    dispatch(setProjects(data))
  } catch (err) {
    console.error('Error fetching projects: ', err)
  }
}

const snackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.snacks
    default:
      return state
  }
}

export default snackReducer
