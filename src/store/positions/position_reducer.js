import { addPosition, ADD_POSITIONS } from './position_actions'

export const positionReducer = (state = [], action) => {
    switch(action.type){
        case ADD_POSITIONS: {
            return action.positions
        }
        default: {
            return state
        }
    }
}