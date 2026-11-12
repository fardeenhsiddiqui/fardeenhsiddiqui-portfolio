import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test('home page shows name, role and resume download', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1, name: 'Fardeen Siddiqui' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', '/Fardeen_Siddiqui_Resume.pdf');
});

test('project detail renders for a known slug', async () => {
  renderAt('/projects/ppm');
  expect(await screen.findByRole('heading', { level: 1, name: /program pathways mapper/i })).toBeInTheDocument();
});

test('unknown route renders the 404 page', async () => {
  renderAt('/does-not-exist');
  expect(await screen.findByRole('heading', { name: /page not found/i })).toBeInTheDocument();
});

test('unknown project slug renders the 404 page', async () => {
  renderAt('/projects/nope');
  expect(await screen.findByRole('heading', { name: /page not found/i })).toBeInTheDocument();
});

test('contact page lists the email address', async () => {
  renderAt('/contact');
  expect(await screen.findByRole('link', { name: /fardeenhsiddiqui98@gmail.com/i })).toBeInTheDocument();
});
