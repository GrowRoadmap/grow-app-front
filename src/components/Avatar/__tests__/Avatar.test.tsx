import React from 'react';
import { render } from '../../../../tests';
import { Avatar } from '../Avatar';

const text = 'U';

describe('<Avatar />', () => {
    it('should render Avatar', () => {
        const { getByText, getByTestId } = render(<Avatar>{text}</Avatar>);
        expect(getByTestId('Avatar')).toBeTruthy();
        expect(getByText(text)).toBeTruthy();
    });
});
