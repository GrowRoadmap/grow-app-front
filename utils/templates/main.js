module.exports = (componentName) => ({
    content: `export { ${componentName} } from './${componentName}';`,
    filename: `index`,
    extension: `.ts`,
});
