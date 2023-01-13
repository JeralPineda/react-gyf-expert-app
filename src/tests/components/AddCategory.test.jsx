import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />); //se crea sujeto de prueba
    const input = screen.getByRole('textbox'); //Extraemos el input

    fireEvent.input(input, { target: { value: 'Bleach' } }); //Disparamos el evento

    expect(input.value).toBe('Bleach'); //Asersion de lo que esperamos que suceda
  });

  test('debe llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Bleach';

    //Mock (simulación)
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } }); //Disparamos el evento
    fireEvent.submit(form);

    expect(input.value).toBe(''); //Que se limpio el formulario

    expect(onNewCategory).toHaveBeenCalled(); //Que halla sido llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1); //Que halla sido llamada una vez
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); //Que halla sido llamada con el valor de la caja de texto
  });

  test('No debe de llamar el onNewCategory si el input esta vació', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled(); //Que no halla sido llamada
    expect(onNewCategory).toHaveBeenCalledTimes(0); //Que halla sido llamada una 0 veces
  });
});
