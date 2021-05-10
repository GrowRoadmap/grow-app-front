import styled, { css } from 'styled-components';
import { switchProp, theme, ifProp } from 'styled-tools';
import { Box } from 'components/Box';

export const VoteWrapper = styled(Box)`
    position: relative;
    border-radius: ${theme('radii.xl')};
    border: 1px solid ${theme('colors.primary')};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    background: linear-gradient(
        90deg,
        ${theme('colors.primary')} 0%,
        ${theme('colors.primary')} 20%,
        transparent 20%,
        transparent 100%
    );
`;

export const VoteCount = styled(Box)`
    background: ${theme('colors.primary')};
    padding: 3px 15px;
    border-radius: ${theme('radii.xl')};
`;
