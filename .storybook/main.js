const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: ['@storybook/addon-docs', '@storybook/addon-knobs', "@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        });

        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, '../'),
            path.resolve(__dirname, '../src'),
        ];

        return config;
    },
};
