import React from 'react';
import { Avatar } from 'antd';
import { AvatarListBox } from './styles';

export interface AvatarListProps {
    maxCount?: number;
    avatarList: any[];
}

export const AvatarList: React.FC<AvatarListProps> = ({
    maxCount = 5,
    avatarList,
}) => (
    <AvatarListBox>
        {avatarList?.slice(0, maxCount).map((user, i) => (
            <Avatar key={i} src={user.photo} />
        ))}
        <Avatar>
            +{avatarList.length > 0 && avatarList.length - maxCount}
        </Avatar>
    </AvatarListBox>
);
