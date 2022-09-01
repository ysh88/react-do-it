import loading from './loadingReducer';
import user from './userReducer';
import collection from './collectionReducer';
import searchFilter from './searchFilterReducer';

export default {
  collection,
  loading,
  user,
  searchFilter,
};
/* 
combineReducers 함수에 인자로 전달 
= 리듀서의 반환 결과를 저장할 객체의 키로 사용
= 각 리듀서가 반환하는 값에 대응하는 키로 사용 = loading: true
*/
