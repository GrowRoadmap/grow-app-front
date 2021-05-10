import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

const Provider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: Provider, ...options });

export * from '@testing-library/react';
export { customRender as render };
