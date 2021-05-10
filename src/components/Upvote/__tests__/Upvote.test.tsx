import React from 'react';
import { render } from '../../../../tests';
import { Upvote } from '../Upvote';

describe('<Upvote />', () => {
    it('should render correctly basic variations', () => {
        const { getByText } = render(
            <div>
                <Upvote />
                <Upvote count='999' />
                <Upvote count={998} />
                <Upvote count='4000' />
            </div>
        );

        expect(getByText('+0')).toBeTruthy();
        expect(getByText('+999')).toBeTruthy();
        expect(getByText('+998')).toBeTruthy();
        expect(getByText('+4k')).toBeTruthy();
    });
});
