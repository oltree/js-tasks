/* const getPokemons = async () => {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;
  try {
    const data = await fetch(BASE_URL).then((response) => response.json());

    const urls = [];
    for (let i = 1; i <= data.results.length; i++) {
      urls.push(
        await fetch(`${BASE_URL}/${i}`).then((response) => response.json())
      );
    }

    const pokemonsMap = Promise.all(urls);

    for (let i = 0; i <= urls.length - 1; i++) {
      urls[i].stats = urls[i].stats.reduce((result, { base_stat, stat }) => {
        result[stat.name] = base_stat;

        return result;
      }, {});
    }

    return pokemonsMap;
  } catch (error) {}
};

console.log(getPokemons()); */

const InfoAboutPokemons = async () => {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;
  try {
    const pokemonsData = await fetch(BASE_URL).then((response) =>
      response.json()
    );

    const arrayPromisesWithPokemons = (pokemonsData) => {
      return pokemonsData.map(({ url }) =>
        fetch(url).then((response) => response.json())
      );
    };

    const pokemonsMap = await Promise.all(
      arrayPromisesWithPokemons(pokemonsData.results)
    );

    const modifiedPokemonsMap = (pokemonsMap) => {
      return pokemonsMap.map(({ stats, ...otherFields }) => {
        return {
          ...otherFields,
          stats: (stats = stats.reduce((result, { base_stat, stat }) => {
            result[stat.name] = base_stat;

            return result;
          }, {})),
        };
      });
    };

    return modifiedPokemonsMap(pokemonsMap);
  } catch (error) {
    console.error("Error 100500!");
  }
};

console.log(InfoAboutPokemons());
