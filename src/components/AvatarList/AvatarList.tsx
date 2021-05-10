import React from 'react';
import { Avatar, AvatarProps } from 'components/Avatar';
import { AvatarListBox } from './styles';

export type AvatarListProps = {
    maxCount?: number;
    avatarList: any[];
};

export const AvatarList: React.FC<AvatarListProps & AvatarProps> = ({
    maxCount = 5,
    avatarList,
    ...props
}) => (
    <AvatarListBox data-testid='AvatarList'>
        {avatarList?.slice(0, maxCount).map((user: any, i: number) => (
            <Avatar key={i} src={user.photo} {...props} />
        ))}
        <Avatar {...props}>
            +{avatarList.length > 0 && avatarList.length - maxCount}
        </Avatar>
    </AvatarListBox>
);
