import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import store from './redux/store';

describe('NavBar Component', () => {
  it('renders without breaking', () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>,
    );
  });

  it('displays a logo, a toggle to change theme and a search bar', () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>,
    );
    const logo = screen.getByRole('img', { name: 'Rockstar Logo' });
    expect(logo).toBeInTheDocument();

    const toggle = screen.getByTitle('toggleTheme');
    expect(toggle).toBeInTheDocument();

    const searchBar = screen.getByTitle('SearchBar');
    expect(searchBar).toBeInTheDocument();

    fireEvent.change(searchBar, { target: { value: 'GTA' } });
    expect(searchBar).toHaveValue('GTA');
  });
});
