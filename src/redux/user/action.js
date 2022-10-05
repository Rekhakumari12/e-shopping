import ACTIONS from "./types"

export const setCurrentUser = user => {
  return {
    type: ACTIONS.SET_CURRENT_USER,
    payload: user
  }
}