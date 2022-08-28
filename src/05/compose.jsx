import compose from "recompose/compose";
import withLoading from './withLoading'
import withState from "recompose/withState";


function Component() {
  return '완료(컴포넌트 출력)';
}

const withLoadData = withState('isLoading', 'setIsLoading', false);

const ComponentWithLoading = withLoading('로딩 중')(Component);
const ComponentWithLoadData = withLoadData(Component);

//하이어오더 컴포넌트 조합 => 하이어오더 확장
const withLoadingAndLoadData = compose(withLoadData, withLoading('로딩 중')); 
//recompose 라이브러리 compose 함수는 조합 순서가 중요
//먼저 조합에 적용된 하이어오더 컴포넌트에서 생성된 프로퍼티가 뒤로 전달된다.

export const ComponentWithBoth = withLoadingAndLoadData(Component);