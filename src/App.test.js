import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { configureStore } from '@reduxjs/toolkit';
import ListView from './components/listView';

describe('ListView component', () => {
  
  test('renders search input', () => {
    render(
      <Provider store={store}>
        <ListView />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText(/Search repo's....*/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('filters search results', () => {
    render(
      <Provider store={store}>
        <ListView />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText(/Search repo's....*/i);

    // Type a search query
    fireEvent.change(searchInput, { target: { value: 'react' } });
  });

  test('displays message when no search results are found', () => {
    render(
      <Provider store={store}>
        <ListView />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText(/Search repo's....*/i);

    // Type a search query
    fireEvent.change(searchInput, { target: { value: 'test' } });

    // Check if "No result found" message is displayed
    expect(screen.getByText(/No result found/i)).toBeInTheDocument();
  });

  test('displays "-" for repos with no description', () => {
    const mockRepo = [
      {
        id: 1,
        name: 'Repo 1',
        description: 'This is the first repo',
      },
      {
        id: 2,
        name: 'Repo 2',
        description: null,
      },
    ];

    // Create a mock store object
    const store = configureStore({
      reducer: {
        repo: (state = { repo: [] }, action) => {
          return state;
        },
      },
      preloadedState: { repo: { repo: mockRepo } },
    });

    render(
      <Provider store={store}>
        <ListView />
      </Provider>
    );

    expect(screen.getByText('Repo 1')).toBeInTheDocument();
    expect(screen.getByText('This is the first repo')).toBeInTheDocument();
    expect(screen.getByText('Repo 2')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
