const Application = () => {
  const [character, setCharacter] = useState<null | CharacterType>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(
      () =>
        fetchCharacter().then((c) => {
          setCharacter(c);
          setLoading(false);
        }),
      2000
    );
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {character && <CharacterInformation character={character} />}
    </main>
  );
};

export default Application;
