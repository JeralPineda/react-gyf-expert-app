import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />); //se crea sujeto de prueba
    const input = screen.getByRole('textbox'); //Extraemos el input

    fireEvent.input(input, { target: { value: 'Bleach' } }); //Disparamos el evento

    expect(input.value).toBe('Bleach'); //Asersion de lo que esperamos que suceda
  });
});
