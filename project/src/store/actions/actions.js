export const INC = 'INC';
export const DEC = 'DEC';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

//action creators
export const increment = () => {
  return {
    type: INC
  };
};

export const decrement = () => {
  return {
    type: DEC
  };
};

export const add = (value) => {
  return {
    type: ADD,
    value: value
  };
};

export const subtract = (value) => {
  return {
    type: SUB,
    value: value
  };
};

export const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    result: result
  };
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    id: id
  };
};
