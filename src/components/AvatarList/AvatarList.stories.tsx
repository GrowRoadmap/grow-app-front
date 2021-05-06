import React from 'react';
import { AvatarList } from './AvatarList';

export default {
    title: 'AvatarList',
};

const demoAvatarList = [
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
    { photo: 'https://avatars.githubusercontent.com/u/4360587?v=4' },
];

export const DefaultView = () => <AvatarList avatarList={demoAvatarList} />;
