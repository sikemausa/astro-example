var Singleton = (function () {
  var instance;

  async function createInstance() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=800`);
    const { results } = await response.json();
    const data = await fetch(results[0].url);
    const dataJson = await data.json();
    const pages = [];
    results.forEach(result => {
      for (let i = 0; i < 10; i++) {
        pages.push({
          params: {
            lang: "es",
            name: result.name + i,
          },
          props: {
            ...dataJson
          }
        },
        {
          params: {
            lang: "en",
            name: result.name + i,
          },
          props: {
            ...dataJson
          }
        })
      }
    });
    return pages;
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