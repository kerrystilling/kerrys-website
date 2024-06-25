const path = require('path');
module.exports = {
  entry: {
    'main': '/src/assets/javascript/main.js',
    'home': '/src/assets/javascript/pages/home.js',
    'project': '/src/assets/javascript/pages/project.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/javascript'),
    filename: '[name].js'
  }
};