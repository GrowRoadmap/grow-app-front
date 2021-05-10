import React from 'react';
import { Text } from 'components/Text';
import { VoteWrapper, VoteCount } from './styles';
import { kFormatter } from '../../../utils/basics';

export interface UpvoteProps {
    count?: string | number;
}

export const Upvote: React.FC<UpvoteProps> = ({ count = 0 }) => (
    <VoteWrapper data-testid='Upvote' my='1'>
        <VoteCount>
            <Text
                color='white'
                fontSize='sm'
                minWidth='30px'
                textAlign='center'
            >
                +{kFormatter(count)}
            </Text>
        </VoteCount>
        <Text px='2' fontSize='sm' color='primary'>
            Upvote
        </Text>
    </VoteWrapper>
);
