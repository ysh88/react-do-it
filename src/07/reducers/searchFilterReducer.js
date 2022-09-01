import { SET_FILTER, RESET_FILTER } from '../actions/searchFilterActions';

const initState = {};

// 리듀서를 호출할 때 전달되는 state인자는 리덕스에 있는 'global state' 전체가 아님
// searchFilter영역의 state가 전달됨 => state.searchFilter
export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER: {
      const { filterName, value } = payload;
      return {
        ...state, //state.searchFilter
        [filterName]: value,
      };
    }
    case RESET_FILTER:
      return initState;

    default:
      return state;
  }
}
