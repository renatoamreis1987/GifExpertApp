import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", async () => {
  test("debe de retornar el estado inicial", () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Batman"));
    const { data, loading } = result.current;

    await waitForNextUpdate()

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe de retornar un arreglo de imgs y el loading en false', async() => {
    
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Batman"));
    await waitForNextUpdate()

    const { data, loading } = result.current;



    expect(data.length).toEqual(10);
    expect(loading).toBe(false);

  })
  
});
