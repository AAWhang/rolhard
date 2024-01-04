// src/views/header.test.js

import { render, screen } from '@testing-library/react';
import { Navbar, NavItem, DropdownItem, DropdownMenu } from '../views/header';

describe('Navbar', () => {

  test('renders navbar', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

});

describe('NavItem', () => {

  test('toggles open state', () => {
    render(<NavItem />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });

}); 

describe('DropdownItem', () => {

  test('renders dropdown item', () => {
    render(<DropdownItem />);
    expect(screen.getByText(/dropdown item/i)).toBeInTheDocument();
  });

});

describe('DropdownMenu', () => {
  
  test('renders dropdown menu', () => {
    render(<DropdownMenu />);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

});