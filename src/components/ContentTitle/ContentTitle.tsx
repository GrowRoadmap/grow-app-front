import React from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { TruncateProps } from 'react-truncate';
import { Popover } from 'antd';

export type crawlerDataProps = {
    title: string;
    description: string;
    url: string;
    icon: string;
};

export type ContentTitleProps = {
    truncate?: TruncateProps | boolean;
    title: string;
    user: string;
    crawlerData?: crawlerDataProps;
};

export const ContentTitle: React.FC<ContentTitleProps> = ({
    truncate,
    title,
    user,
    crawlerData,
}) => (
    <Box data-testid='ContentTitle' my='2'>
        <Text
            as='p'
            m='0'
            lineHeight='10px'
            fontSize='md'
            color='blueGray'
            truncate={truncate}
        >
            {title}
        </Text>
        <Text as='small' fontSize='xs' color='blueGray'>
            {user}
        </Text>
    </Box>
);
