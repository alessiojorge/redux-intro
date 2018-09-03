import * as actions from './actions';

export const saveResult = (result) => {
  return {
    type: actions.STORE_RESULT,
    result: result
  };
};

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout( () => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actions.DELETE_RESULT,
    id: id
  };
};
