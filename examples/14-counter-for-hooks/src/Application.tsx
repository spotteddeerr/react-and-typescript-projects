import React, { useState, FormEvent, ChangeEvent } from 'react';

type CounterProps = {
  incident: string;
};

const Counter = ({ incident }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCount(+e.target.value);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={handleSubmit}>
          <label htmlFor="set-to">Set Count</label>
          <input onChange={handleChange} id="set-to" type="number" />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter incident="Dream" />;

export default Application;
