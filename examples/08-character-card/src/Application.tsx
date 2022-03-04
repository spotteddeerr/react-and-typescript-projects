import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

const WithCharacter = () => {
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
    <>
      {loading && <Loading />}
      {character && <CharacterInformation character={character} />}
    </>
  );
};

const Application = () => {
  return (
    <main>
      <WithCharacter />
    </main>
  );
};

export default Application;
