import React from 'react';
import { Tag } from './Tag';

export default {
    title: 'Tag',
};

export const StatusColors = () => (
    <div>
        <Tag />
        <Tag truncate={{ width: 100 }}>This is an exemple how to truncate</Tag>
        <Tag label='Easy' />
        <Tag label='Medium' />
        <Tag label='Hard' />
        <Tag label='Expert' />
    </div>
);

export const CustomContent = () => (
    <div>
        <Tag truncate={{ width: 100 }}>This is an exemple how to truncate</Tag>
        <Tag label='Disabled'>🧮 This is an exemple how to truncate</Tag>
    </div>
);
