import React from 'react';
import { Upvote } from './Upvote';

export default {
    title: 'Upvote',
};

export const DefaultView = () => (
    <div>
        <Upvote count='4' />
        <Upvote count={3333} />
    </div>
);
