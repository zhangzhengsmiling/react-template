import React, { useReducer } from 'react';
import './style';
import { produce } from 'immer';

interface StateType {
  counter: number;
}

const reducer = (state: StateType, action: { type: 'increase' | 'decrease' }) => {
  switch (action.type) {
    case 'increase':
      // return produce(state, (state) => {state.counter++})
      state.counter++;
      break;
    case 'decrease':
      // state.counter--;
      // return produce(state, state => {state.counter--});
      state.counter--;
      break;
  }
};

const init = (counter: number) => {
  return {
    counter,
  };
};

const TestPage = () => {
  const [state, dispacth] = useReducer(produce(reducer), 10, init);

  return (
    <div className="test-page">
      {state.counter}
      <p>
        <button onClick={() => dispacth({ type: 'increase' })}>+</button>
      </p>
      <p>
        <button onClick={() => dispacth({ type: 'decrease' })}>-</button>
      </p>
      this is test page...
      <img src="/imgs/logo.png" alt="" />
    </div>
  );
};

export default TestPage;
