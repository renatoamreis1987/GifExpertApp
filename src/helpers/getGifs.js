/* ESTO ES UNA HELPER FUNCTION
Lo que va a hacer esta función es hacer una llamada API y obtener la información. 

Usamos desestructuración, que nos va a devolver un array con objectos
y después un map para obtener solo la info importante de cada objecto, 
y por fin retornamos los resultados.

*/

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=PXocYnR1s9iRmAyW8RmI8wqbEmdRYlWa`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
