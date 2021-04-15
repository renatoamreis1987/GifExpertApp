import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe de mostrarse correctamente", () => {
    let wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    // Va buscar el 'GifGrid' y va comprobar que debe existir la misma cantidad de las categorias que enviamos.
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
