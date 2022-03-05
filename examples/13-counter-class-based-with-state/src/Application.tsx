import { Component, ChangeEvent, FormEvent } from 'react';

type CounterProps = {
  incident: string;
};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  };

  increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }));
  reset = () => this.setState({ count: 0 });
  handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ count: +e.target.value });
  handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  // props = {
  //   incident:incident,
  // }
  render() {
    const { incident } = this.props;
    const { count } = this.state;
    return (
      <main className="Counter">
        <h1>Days Since Last {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="set-to">Set Count</label>
            <input onChange={this.handleChange} id="set-to" type="number" />
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  }
}

class Application extends Component {
  render() {
    return <Counter incident="play" />;
  }
}

export default Application;
