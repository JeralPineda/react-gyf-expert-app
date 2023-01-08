import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en <GifItem />', () => {
  const title = 'saitama GIF';
  const url = 'https://media3.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=2ae2c790urtrjrz0b018140k0rwa0zm0s5rj1aqvbrcpbaes&rid=giphy';

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(
      <GifItem
        //
        title={title}
        url={url}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);

    //  expect(screen.getByRole('img').src).toBe(url);
    //  expect(screen.getByRole('img').alt).toBe(title);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
