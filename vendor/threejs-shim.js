/**
 * TODO: make more shims
 * e.g. define('threejs-object', [], function() {
 *  return { mesh: THREE.Mesh };
 * }
 */
(function() {
  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      Object.defineProperty(values, '__esModule', {
        value: true
      });

      return values;
    });
  }

  generateModule('threejs', { 'default': THREE });
})();