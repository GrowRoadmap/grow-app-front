import React from 'react';
import { render } from '../../../../tests';
import { AvatarList } from '../AvatarList';

const demoAvatarList = [
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
];

describe('<Avatar />', () => {
    it('should render AvatarList', () => {
        const { getByTestId } = render(
            <AvatarList avatarList={demoAvatarList} />
        );
        expect(getByTestId('AvatarList')).toBeTruthy();
    });
});
