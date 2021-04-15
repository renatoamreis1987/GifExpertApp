import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe("Pruebas en <GifGrid />", () => {
  const category = "Batman";
  

  test("debe de mostrarse correctamente", () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se carga imágenes useFetchGifs', () => {
    
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/blablabla.jpg',
      title: 'Cualquier cosa'
    }]

    // Tenemos que simular lo que devuelve el Hook useFetchGifs
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    let wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false) // ya que tenemos data, que el loading no exista
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
  

});
