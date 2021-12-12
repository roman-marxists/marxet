import { getPokemon } from '../src/api/user';

export default function Index() {
  const doGetPokemon = async () => {
    const t = await getPokemon();
    console.log('🚀 ~ file: index.js ~ line 9 ~ doGetPokemon ~ t', t);
  };
  return <div onClick={doGetPokemon}>hello</div>;
}
