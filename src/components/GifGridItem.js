// GifGridItem es un simples componente que lo único que va hacer es renderizar un div para cada GIF.

import React from "react";
import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
