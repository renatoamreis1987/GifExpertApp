/* 
Este es el componente principal, donde llamamos a otros 2 componentes. 

AddCategory que es lo que va a gestionar el input, 
le pasamos setCategories para que el resultado que va a devolver se almacene en el Hook useState 
de este mismo componente (categories), y así poder pasarlo después a otro componente, GifGrid.  

GifGrid va a ser el componente responsable de renderizar las imágenes, 
al cual vamos a pasar todas las categories que tenemos almacenadas, 
y para cada una de ellas vamos a ejecutar el componente GifGrid.
*/ 

import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({defaultCategories = []}) => {
  // Hook useState
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
