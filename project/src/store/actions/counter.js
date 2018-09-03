import *  as actions from './actions';

//action creators
export const increment = () => {
  return {
    type: actions.INC
  };
};

export const decrement = () => {
  return {
    type: actions.DEC
  };
};

export const add = (value) => {
  return {
    type: actions.ADD,
    value: value
  };
};

export const subtract = (value) => {
  return {
    type: actions.SUB,
    value: value
  };
};
