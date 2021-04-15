/*
GifGrid es el componente responsable por renderizar el conjunto de GIFs de una categoría, 
va llamar a uno HOOKS -> useFetchGifs para obtener el listado, 
y una vez tenga ese listado lo va a renderizar llamando otro componente, GifGridItem. 
*/

import React from "react";
import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> {category}</h3>

      {loading && <p className='animate__animated animate__flash'>Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

