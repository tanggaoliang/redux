import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_INPUT:
      newState.inputValue = action.value
      return newState
    case ADD_ITEM:
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case DELETE_ITEM:
      newState.list.splice(action.index, 1)
      return newState
    case GET_LIST:
      newState.list.push(...action.data.data.list)
      return newState
    default:
      return state
  }

}