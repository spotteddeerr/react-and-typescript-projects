import React, { useState, FormEvent } from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

type FormProps = {
  onSubmit: (n: number) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [value, setValue] = useState<number>(1);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          onChange={(e) => setValue(+e.target.value)}
          value={value}
          type="number"
          min="1"
          max="10"
          id="number-of-facts"
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [facts, setFacts] = useState<DogFactType[]>([]);
  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => setFacts(facts));
  };
  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <section>
        {facts && facts.map((fact) => <Fact fact={fact.fact} key={fact.id} />)}
      </section>
    </main>
  );
};

export default Application;
