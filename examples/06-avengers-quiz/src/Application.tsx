import React, { useState } from 'react';
import { questions } from './questions';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, toggleHidden] = useState(false);

  const handleClick = () => toggleHidden(!isHidden);
  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={isHidden ? 'blurred' : 'visible'}>{answer}</span>
      </p>
      <footer>
        <button onClick={handleClick}>Toggle Answer</button>
      </footer>
    </article>
  );
};

const Application = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default Application;
