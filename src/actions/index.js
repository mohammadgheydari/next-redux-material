import { INCREMENT, DECREMENT } from '../constants'

export const increment = (isServer) => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      from: isServer ? 'سرور' : 'کلاینت'
    })
  }
}

export const decrement = (isServer) => {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      from: isServer ? 'سرور' : 'کلاینت'
    })
  }
}
