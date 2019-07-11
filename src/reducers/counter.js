import { INCREMENT, DECREMENT } from '../constants'

const initialState = {
  value: 0,
  action: null,
  from: null
}

const counter = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          value: state.value + 1,
          action: 'افزایش',
          from: action.from
        }
  
      case DECREMENT:
        return {
          ...state,
          value: state.value - 1,
          action: 'کاهش',
          from: action.from
        }
  
      default:
        return state
    }
}
export default counter