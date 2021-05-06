const component = require('./component');
const componentStories = require('./component.stories');
const componentTests = require('./component.test');
const main = require('./main');

// DONT REMOVE MAIN FILE FROM FIRST POSITION
module.exports = [main, component, componentStories, componentTests];
