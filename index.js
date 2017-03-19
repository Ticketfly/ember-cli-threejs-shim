const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-threejs-shim',

  isDevelopingAddon() {
    return true;
  },

  included(app) {
    this._super.included.apply(this, arguments);
    // Ensures that imports work for nested addons and engines
    // @see: https://github.com/ember-cli/ember-cli/issues/3718

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import({
      development: 'vendor/threejs-src/three.js',
      production: 'vendor/threejs-src/three.min.js'
    });

    app.import('vendor/threejs-shim.js');
  },

  treeForVendor(vendorTree) {
    const bowerDirectory = this.project.bowerDirectory;

    const assetTree = new Funnel(path.dirname(require.resolve('three')), {
      files: ['three.js', 'three.min.js'],
      destDir: 'threejs-src'
    });

    return mergeTrees([vendorTree, assetTree]);
  }
};
