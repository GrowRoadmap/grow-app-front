import React from 'react';
import { Searchbar } from './Searchbar';

export default {
    title: 'Searchbar Cascade',
};

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

const options2 = [
    {
        value: 'php',
        label: 'PHP',
        children: [
            {
                value: 'Road to be a PHP master',
                label: 'Road to be a PHP master',
            },
        ],
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

export const Single = () => (
    <Searchbar placeholder='Procure por um roadmap' options={options} />
);

export const CascadeChoice = () => (
    <Searchbar placeholder='Procure por um roadmap' options={options2} />
);
