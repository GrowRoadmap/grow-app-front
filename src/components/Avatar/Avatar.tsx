import React from 'react';
import { Avatar as AntdAvatar } from 'antd';

export type AvatarProps = {
    children?: React.ReactNode;
    alt?: string;
    gap?: number;
    icon?: React.ReactNode;
    shape?: 'circle' | 'square';
    size?: number | 'large' | 'small' | 'default' | Record<string, unknown>;
    src?: string | React.ReactNode;
    srcSet?: string;
    draggable?: boolean | undefined;
    onError?: () => boolean;
    style?: any;
};

export const Avatar: React.FC<AvatarProps> = ({ children, ...props }) => (
    <AntdAvatar data-testid='Avatar' {...props}>
        {children}
    </AntdAvatar>
);
