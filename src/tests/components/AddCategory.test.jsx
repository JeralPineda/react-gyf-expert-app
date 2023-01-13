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
    // TODO:

    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } }); //Disparamos el evento
    fireEvent.submit(form);

    expect(input.value).toBe('');
  });
});
