import React from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { CircleSign } from './styles';
import { TruncateProps } from 'react-truncate';

export type TagProps = {
    label?: 'Disabled' | 'Undefined' | 'Easy' | 'Medium' | 'Hard' | 'Expert';
    truncate?: TruncateProps | boolean;
    children?: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({
    label = 'Undefined',
    truncate,
    children,
}) => (
    <Box
        data-testid='Tag'
        backgroundColor='gray.70'
        borderLeft='2px gray'
        borderRadius='sm'
        p='2'
        display='flex'
        alignItems='center'
        width='fit-content'
        my='2'
    >
        <CircleSign colorStatus={label} />
        <Text color='blueGray' fontSize='sm' m='0' truncate={truncate}>
            {children || label}
        </Text>
    </Box>
);
