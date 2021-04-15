/*
AddCategory es el componente responsable de gestionar el buscador, 
en este caso va a obtener lo que ponemos en el buscador y guardarlo en el Hook useState, 
y lo vamos pasar al componente “GifExpertApp” en “setCategories((cats) => [inputValue, ...cats])”
*/


import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  // Hook useState
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    // Aquí vamos a añadir a inputValue el valor del input
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      // Aquí vamos a obtener las cats (desde un cb) y añadir el valor de input
      setCategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p> { inputValue } </p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
