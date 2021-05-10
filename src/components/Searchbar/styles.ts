import styled from 'styled-components';
import { Box } from 'components/Box';
import { theme } from 'styled-tools';

export const Wrapper = styled(Box)`
    display: flex;
    align-items: center;

    .ant-cascader-picker,
    .ant-cascader-picker-show-search,
    .ant-cascader-menus {
        background-color: #d4dfe5 !important;
    }
    .ant-input,
    .ant-cascader-input {
        border-radius: ${theme('radii.lg')};
    }
    .ant-cascader-menus {
        background-color: black !important;
    }
`;
