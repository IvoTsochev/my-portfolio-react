import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders the MainPortfolio component for the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // Since MainPortfolio renders the Portfolio component, we can check for content rendered by Portfolio.
    // Let's assume Portfolio component renders a heading with text "My Portfolio"
    // As we don't have the content of Portfolio.jsx, we will check for the text "Portfolio" for now.
    // This might need to be adjusted based on the actual content of the Portfolio component.
    expect(screen.getByRole('heading', { name: /Hi, I'm Ivo Tsochev/i })).toBeInTheDocument();
  });
});
