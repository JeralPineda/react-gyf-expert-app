export const getGifs = async (category) => {
  //Pegar el string de la API key por el testing, no reconoce la variable de entorno
  //   const apiKey = '';
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      //
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
