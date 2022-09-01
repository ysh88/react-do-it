import loading from './loadingReducer';
import user from './userReducer';
import collection from './collectionReducer';
import searchFilter from './searchFilterReducer';

// 분리된 리듀서들 결합
export default {
  collection, // 리듀서 모듈 이름 = 분리된 리듀서들을 구별
  loading,
  user,
  searchFilter,
};
