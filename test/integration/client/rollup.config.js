const node = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  plugins: [
    node({
      mainFields: ['browser', 'es2015', 'module', 'jsnext:main', 'main'],
    }),
    commonjs({
      namedExports: {
        'node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.umd.js': [
          'grpc',
        ],
      },
    }),
  ],
};
