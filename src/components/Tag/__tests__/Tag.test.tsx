import React from 'react';
import { render } from '../../../../tests';
import { Tag } from '../Tag';

const text = 'Its a button';

describe('<Tag />', () => {
    it('should render correctly basic variations', () => {
        const { getByText } = render(
            <div>
                <Tag />
                <Tag label='Easy' />
                <Tag label='Medium' />
                <Tag label='Hard' />
                <Tag label='Expert' />
            </div>
        );

        expect(getByText('Undefined')).toBeTruthy();
        expect(getByText('Easy')).toBeTruthy();
        expect(getByText('Medium')).toBeTruthy();
        expect(getByText('Hard')).toBeTruthy();
        expect(getByText('Expert')).toBeTruthy();
    });

    it('should match snapshot', () => {
        const { container } = render(
            <div>
                <Tag />
                <Tag label='Easy' />
                <Tag label='Medium' />
                <Tag label='Hard' />
                <Tag label='Expert' />
                <Tag truncate>This is an exemple how to truncate</Tag>
                <Tag label='Disabled'>
                    🧮 This is an exemple how to truncate
                </Tag>
            </div>
        );
        expect(container).toMatchSnapshot();
    });
});
