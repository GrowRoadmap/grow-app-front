import styled, { css } from 'styled-components';
import { switchProp, theme } from 'styled-tools';
import { Box } from 'components/Box';

export const CircleSign = styled(Box)<any>`
    width: 6px;
    height: 6px;
    border-radius: 100%;
    margin-right: 6px;
    ${switchProp('colorStatus', {
        Disabled: css`
            display: none;
        `,
        Undefined: css`
            background-color: ${theme('colors.levels.undefined')};
        `,
        Easy: css`
            background-color: ${theme('colors.levels.easy')};
        `,
        Medium: css`
            background-color: ${theme('colors.levels.medium')};
        `,
        Hard: css`
            background-color: ${theme('colors.levels.hard')};
        `,
        Expert: css`
            background-color: ${theme('colors.levels.expert')};
        `,
    })}
`;
