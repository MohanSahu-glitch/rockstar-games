import { configure, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import * as EntityAction from './redux/Entity/EntityAction';
import store from './redux/store';
import { ReactNode } from 'react';

let input: HTMLElement;
const searchTerms = {
  normal: 'NFS',
  empty: '',
  specialChars: '!@#$%^',
};
configure({ testIdAttribute: 'id' });
const rtlRender = (children: ReactNode) => {
  render(<Provider store={store}>{children}</Provider>);
};

describe('Search Bar component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();

    // Spy on the actual action creator
    vi.spyOn(EntityAction, 'setSearch');
    rtlRender(<SearchBar />);
    input = screen.getByTestId('SearchBar');
  });

  it('Validate Search Bar rendering', async () => {
    expect(input).toBeInTheDocument();
  });

  it('Handles normal searching with debouncing', async () => {
    await userEvent.type(input, searchTerms.normal);
    expect(input).toHaveValue(searchTerms.normal);

    // Wait for debounce and verify dispatch
    await waitFor(
      () => {
        expect(EntityAction.setSearch).toHaveBeenCalledWith(searchTerms.normal);
        expect(EntityAction.setSearch).toHaveBeenCalledTimes(1);
      },
      { timeout: 600 },
    );
  });

  it('Handles Empty Search term with debouncing', async () => {
    await userEvent.type(input, searchTerms.normal);
    await userEvent.clear(input);

    await waitFor(
      () => {
        expect(EntityAction.setSearch).toHaveBeenCalledWith(searchTerms.empty);
        expect(EntityAction.setSearch).toHaveBeenCalledTimes(1);
      },
      { timeout: 600 },
    );
  });

  it('Handles special characters with debouncing', async () => {
    await userEvent.type(input, searchTerms.specialChars);

    await waitFor(
      () => {
        expect(EntityAction.setSearch).toHaveBeenCalledWith(
          searchTerms.specialChars,
        );
        expect(EntityAction.setSearch).toHaveBeenCalledTimes(1);
      },
      { timeout: 600 },
    );
  });

  it('Handles rapid typing', async () => {
    // Simulate rapid typing
    await userEvent.type(input, 'A');
    await userEvent.type(input, 'B');
    await userEvent.type(input, 'C');

    await waitFor(
      () => {
        expect(EntityAction.setSearch).toHaveBeenCalledWith('ABC');
        expect(EntityAction.setSearch).toHaveBeenCalledTimes(1);
      },
      { timeout: 600 },
    );
  });
});
