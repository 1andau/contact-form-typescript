import { MainPage } from '../MainPage';
import { render, fireEvent } from '@testing-library/react';


describe.only('MainPage', () => {
  test('changes value after selecting another field', () => {
    const { getByTestId } = render(<MainPage />);
    fireEvent.select(getByTestId('cities'));
  });

  test('should display correct error message', () => {
    const { getByTestId, findByText } = render(<MainPage />);
    getByTestId('submit');
    fireEvent.click(getByTestId('submit'));
    findByText('This field is required');
  });
});
