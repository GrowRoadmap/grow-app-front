import React from 'react';
import { Avatar } from './Avatar';
import { UserOutlined } from '@ant-design/icons';

export default {
    title: 'Avatar',
};

export const Basic = () => (
    <div>
        <div>
            <Avatar size={64} icon={<UserOutlined />} />
            <Avatar size='large' icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
            <Avatar size='small' icon={<UserOutlined />} />
        </div>
        <div>
            <Avatar shape='square' size={64} icon={<UserOutlined />} />
            <Avatar shape='square' size='large' icon={<UserOutlined />} />
            <Avatar shape='square' icon={<UserOutlined />} />
            <Avatar shape='square' size='small' icon={<UserOutlined />} />
        </div>
    </div>
);

export const Variations = () => (
    <div>
        <Avatar icon={<UserOutlined />} />
        <Avatar>U</Avatar>
        <Avatar size={40}>USER</Avatar>
        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            U
        </Avatar>
        <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
        />
    </div>
);

export const Responsive = () => (
    <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<UserOutlined />}
    />
);
