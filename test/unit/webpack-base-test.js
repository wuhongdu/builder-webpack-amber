const assert = require('assert');

describe('webpack.base.js', () => {
  const baseConfig = require('../../lib/webpack.base');
  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/wufeng/FrontEnd/Interview/webpack_4_1/builder-webpack/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/wufeng/FrontEnd/Interview/webpack_4_1/builder-webpack/test/smoke/template/src/search/index.js');
  });
});
