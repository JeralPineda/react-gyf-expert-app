import { render } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en <GifItem />', () => {
  const title = 'One Punch Man';
  const url = 'https://giphy.com/gifs/yo3TC0yeHd53G';

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
});
