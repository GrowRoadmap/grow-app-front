import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Searchbar } from '../Searchbar';

const holder = 'Procurar Roadmap...';
const options = [
    {
        value: 'php',
        label: 'PHP',
    },
    {
        value: 'javascript',
        label: 'Javascript',
    },
    {
        value: 'java',
        label: 'Java',
    },
];

describe('<Searchbar />', () => {
    it('should render correctly', () => {
        const { getByText, getByTestId } = render(
            <Searchbar options={options} placeholder={holder} />
        );
        fireEvent.mouseDown(getByTestId('Search'));
        setInterval(() => expect(getByText('Javascript')).toBeTruthy(), 500);
    });
});
