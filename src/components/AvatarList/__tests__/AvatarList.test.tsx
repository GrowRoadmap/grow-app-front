import React from 'react';
import { render } from '@testing-library/react';
import { AvatarList, AvatarListProps } from '../AvatarList';

describe('Test Component', () => {
    let props: AvatarListProps;
    beforeEach(() => {
        props = {
            foo: 'bar',
        };
    });

    const renderComponent = () => render(<AvatarList {...props} />);

    it('should render foo text correctly', () => {
        props.foo = 'It is us';
        const { getByTestId } = renderComponent();
        const component = getByTestId('AvatarList');
        expect(component).toHaveTextContent('It is us');
    });
});
