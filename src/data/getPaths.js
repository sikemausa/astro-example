var Singleton = (function () {
  var instance;

  async function createInstance() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=800`);
    const { results } = await response.json();
    const data = await fetch(results[0].url);
    const dataJson = await data.json();
    return results.reduce((acc, curr) => {
      acc.push(
        {
          params: {
            lang: "es",
            name: curr.name,
          },
          props: {
            ...dataJson
          }
        },
        {
          params: {
            lang: "en",
            name: curr.name,
          },
          props: {
            ...dataJson
          }
        }
      );
      return acc;
    }, []);
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default Singleton;
