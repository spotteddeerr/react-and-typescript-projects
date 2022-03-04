type NameTypeProps = {
  name: string;
};

const NameTag = ({ name }: NameTypeProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name="ying" />;

export default Application;
