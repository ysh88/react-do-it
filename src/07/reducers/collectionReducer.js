import { SET_COLLECTION, SET_AGE } from '../actions/collectionActions';

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
      // 1. 객체 배열에 있는 아이디들을 추출해서 배열로 저장
      const ids = payload.map(entity => entity['id']);
      // 2. 객체 배열에 있는 객체 요소를 '키:값' 형태로 entities 객체에 저장
      const entities = payload.reduce(
        (_entities, entity) => ({
          ..._entities,
          [entity['id']]: entity,
        }),
        {}
      );
      return { ...state, ids, entities };
    }

    case SET_AGE: {
      const { id, age } = payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...state.entities[id], age },
        },
      };
    }

    default:
      return state;
  }
};
