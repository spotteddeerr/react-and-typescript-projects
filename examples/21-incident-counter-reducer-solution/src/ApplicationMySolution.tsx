import { useReducer, Dispatch, FormEvent } from 'react';

type CounterAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'SET';
  payload?: number;
};

type CounterState = {
  value: number;
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'SET':
      return { value: action.payload || 0 };
    default:
      return state;
  }
};

const Counter = ({
  state,
  dispatch
}: {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
}) => {
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'SET', payload: 0 });
  const set = (e: FormEvent<HTMLInputElement>) =>
    dispatch({ type: 'SET', payload: +e.target.value });
  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
        <input onChange={set} type="number" />
      </section>
    </main>
  );
};

const Application = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return <Counter state={state} dispatch={dispatch} />;
};

export default Application;
