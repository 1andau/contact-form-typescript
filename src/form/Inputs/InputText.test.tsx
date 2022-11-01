import { render, fireEvent } from '@testing-library/react';
import { MainPage } from '../MainPage';

describe.only('MainPage', () => {
  test('should watch input correctly', () => {
    const { getByTestId } = render(<MainPage />);

    fireEvent.input(getByTestId('name'));
    fireEvent.input(getByTestId('email'));
    fireEvent.input(getByTestId('phone'));
    fireEvent.input(getByTestId('linkSocialMedia'));
    fireEvent.input(getByTestId('companyName'));
  });

  test('should display correct error message', () => {
    const { getByTestId, findByText } = render(<MainPage />);
    getByTestId('submit');
    fireEvent.click(getByTestId('submit'));
    findByText('This field is required');
  });
});
