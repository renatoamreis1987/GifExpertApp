/* ESTO ES UN CUSTOM HOOK 

En este CUSTOM HOOK lo que vamos hacer es llamar a useEffect, que es una helper Function, 
en la cual pasamos la categoría (la búsqueda) y obtenemos una promesa con los resultados, 
y la almacenamos en nuestro useState y la enviamos como promesa con un return.  

*/

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; // {data: [], loading: true}
};
