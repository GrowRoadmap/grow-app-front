import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import '../public/css/normalize.css';
import '../public/css/vars.css';
import '../public/css/global.css';

import theme from '../theme';

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story />
        </ThemeProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};
