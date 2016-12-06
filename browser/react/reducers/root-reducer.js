import {SET_LYRICS} from '../constants';


const initialState = {
  text: ''
};

export default function reducer (prevState = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_LYRICS:
      newState = Object.assign({}, prevState);
      newState.text = action.text;
      break;

    default:
      return prevState;
  }

  return newState;
}
