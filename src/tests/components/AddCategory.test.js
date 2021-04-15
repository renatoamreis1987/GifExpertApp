/* 
shallow() permite testear un componente sin siquiera pasar por el DOM rendering que hace React. 
La ventaja de este método es que, al no requerir un entorno de navegador para funcionar, es muy rápido.
*/

import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  // limpiar simulaciones antes de inicializar cualquier test
  beforeEach(() => {
    jest.clearAllMocks(); //
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("NO debe de postear la informacion con submit", () => {
    // Tenemos que añadir el preventD porque es lo que va recibir en la fn
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // Pero como no tenemos un input value, la fn setCategories no debe ser llamada
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";

    // 1 - simular el inputChange, lo que va hacer es enviar el value al input
    wrapper.find("input").simulate("change", { target: { value } });

    // 2 - y ahora simular el submit y enviar el valor
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // 3 - setCategories se debe de haber llamado, o llamado 1x, o que debe retornar una Fn()
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // 4 - el valor del input debe de estar '' despues del submit
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
