import React from 'react';
import { render } from '@testing-library/react';
import { ContentTitle, ContentTitleProps } from '../ContentTitle';

describe('Test Component', () => {
    let props: ContentTitleProps;
    beforeEach(() => {
        props = {
            foo: 'bar',
        };
    });

    const renderComponent = () => render(<ContentTitle {...props} />);

    it('should render foo text correctly', () => {
        props.foo = 'It is us';
        const { getByTestId } = renderComponent();
        const component = getByTestId('ContentTitle');
        expect(component).toHaveTextContent('It is us');
    });
});
