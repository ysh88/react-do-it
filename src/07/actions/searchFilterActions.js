export const SET_FILTER = 'searchFilter/SET_FILTER';
export const RESET_FILTER = 'searchFilter/RESET_FILTER';

// Input 컴포넌트에서 이벤트 발생 => onChange(name, e.target.value);
// onChange(name, e.target.value) => setFilter(filterName, value)
// => 리듀서에 전달할 액션 객체 반환
export const setFilter = (filterName, value) => ({
  type: SET_FILTER,
  payload: {
    filterName,
    value,
  },
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});
