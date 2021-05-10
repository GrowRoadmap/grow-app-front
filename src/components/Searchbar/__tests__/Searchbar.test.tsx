import React from 'react';
import { render } from '@testing-library/react';
import { Searchbar } from '../Searchbar';

const name = 'Javascript';

describe('<Text />', () => {
    it('should render correctly', () => {
        const { getByText } = render(<Searchbar />);
        expect(getByText(name)).toBeTruthy();
    });
});
