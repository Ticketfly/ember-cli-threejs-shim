# ember-cli-threejs-shim

Ember-CLI shims - ES6 accessible module for threejs.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-threejs-shim`
* `npm install`
* `bower install`

## Usage
Once `ember-cli-threejs-shim` has been installed through `npm install`, you can import ThreeJS shims as ES6 modules

Import global `THREE`:

```javascript
import THREE from 'threejs';
```

Or import other named exported modules:

```javascript
import Geometry, { BoxGeometry } from 'threejs-geometry';
import BufferGeometry, { BoxBufferGeometry } from 'threejs-geometry/buffer';
import { Vector2, Vector3 } from 'threejs-math/vector';
import Object3D, { Mesh, Group } from 'threejs-object';
```

Full list of shims could be found in [threejs-shim.js](https://github.com/Ticketfly/ember-cli-threejs-shim/blob/master/vendor/threejs-shim.js)
## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
