import { Box } from 'components/Box';
import styled from 'styled-components';
import { theme } from 'styled-tools';

export const AvatarListBox = styled(Box)`
    max-width: fit-content;
    .ant-avatar:not(:first-child) {
        margin-left: -15px;
    }
    .ant-avatar:last-child {
        background-color: ${theme('colors.primary')};
    }
`;
