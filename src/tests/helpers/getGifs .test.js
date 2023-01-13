import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs()', () => {
  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('Bleach');

    expect(gifs.length).toBeGreaterThan(0); // > 0
    expect(gifs[0]).toEqual({
      id: expect.any(String), //lo que sea, con tal sea string
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
