import { SET_LOADING, RESET_LOADING } from "../actions/loadingActions";

const initState = false;

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: //분리한 액션에서 액션 타입을 가져와서 사용
      return payload;

    case RESET_LOADING:
      return initState;

    default:
      return state;
  }
}
