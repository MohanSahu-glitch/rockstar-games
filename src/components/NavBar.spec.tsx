import { screen } from '@testing-library/react';
import NavBar from './NavBar';
import { beforeEach, describe, expect, it } from 'vitest';
import { rtlRender } from '../helpers';

describe('NavBar Component', () => {
  beforeEach(() => {
    rtlRender(<NavBar />);
  });

  it('displays a logo, a toggle to change theme and a search bar', () => {
    const logo = screen.getByRole('img', { name: 'Rockstar Logo' });
    expect(logo).toBeInTheDocument();

    const toggle = screen.getByTitle('toggleTheme');
    expect(toggle).toBeInTheDocument();

    const searchBar = screen.getByTitle('SearchBar');
    expect(searchBar).toBeInTheDocument();
  });
});
