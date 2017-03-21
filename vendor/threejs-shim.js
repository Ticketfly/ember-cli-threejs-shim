(function() {
  var shims = {
    'threejs': {
      'default': THREE
    },
    'threejs-attributes/buffer': {
      'default': THREE.BufferAttribute,
      'Float64BufferAttribute': THREE.Float64BufferAttribute,
      'Float32BufferAttribute': THREE.Float32BufferAttribute,
      'Uint32BufferAttribute': THREE.Uint32BufferAttribute,
      'Int32BufferAttribute': THREE.Int32BufferAttribute,
      'Uint16BufferAttribute': THREE.Uint16BufferAttribute,
      'Int16BufferAttribute': THREE.Int16BufferAttribute,
      'Uint8ClampedBufferAttribute': THREE.Uint8ClampedBufferAttribute,
      'Uint8BufferAttribute': THREE.Uint8BufferAttribute,
      'Int8BufferAttribute': THREE.Int8BufferAttribute
    },
    'threejs-camera': {
      'default': THREE.Camera,
      'CubeCamera': THREE.CubeCamera,
      'OrthographicCamera': THREE.OrthographicCamera,
      'PerspectiveCamera': THREE.PerspectiveCamera,
      'StereoCamera': THREE.StereoCamera
    },
    'threejs-core': {
      'default': THREE.Core,
      'Clock': THREE.Clock,
      'DirectGeometry': THREE.DirectGeometry,
      'EventDispatcher': THREE.EventDispatcher,
      'Face3': THREE.Face3,
      'InstancedBufferAttribute': THREE.InstancedBufferAttribute,
      'InstancedInterleavedBuffer': THREE.InstancedInterleavedBuffer,
      'InstancedleavedBufferAttribute': THREE.InstancedleavedBufferAttribute,
      'Layers': THREE.Layers,
      'Raycaster': THREE.Raycaster,
      'Uniform': THREE.Uniform
    },
    'threejs-core/curves': {
      'ArcCurve': THREE.ArcCurve,
      'CatmullRomCurve3': THREE.CatmullRomCurve3,
      'CubicBezierCurve': THREE.CubicBezierCurve,
      'CubicBezierCurve3': THREE.CubicBezierCurve3,
      'EllipseCurve': THREE.EllipseCurve,
      'LineCurve': THREE.LineCurve,
      'LineCurve3': THREE.LineCurve3,
      'QuadraticBezierCurve': THREE.QuadraticBezierCurve,
      'QuadraticBezierCurve3': THREE.QuadraticBezierCurve3,
      'SplineCurve': THREE.SplineCurve
    },
    'threejs-geometry': {
      'default': THREE.Geometry,
      'BoxGeometry': THREE.BoxGeometry,
      'CircleGeometry': THREE.CircleGeometry,
      'ConeGeometry': THREE.ConeGeometry,
      'CylingderGeometry': THREE.CylingderGeometry,
      'DodecahedronGeometry': THREE.DodecahedronGeometry,
      'EdgesGeometry': THREE.EdgesGeometry,
      'ExtrudeGeometry': THREE.ExtrudeGeometry,
      'IcosahedronGeometry': THREE.IcosahedronGeometry,
      'LatheGeometry': THREE.LatheGeometry,
      'OctahedronGeometry': THREE.OctahedronGeometry,
      'ParametricGeometry': THREE.ParametricGeometry,
      'PlaneGeometry': THREE.PlaneGeometry,
      'PolyhedronGeometry': THREE.PolyhedronGeometry,
      'RingGeometry': THREE.RingGeometry,
      'ShapeGeometry': THREE.ShapeGeometry,
      'SphereGeometry': THREE.SphereGeometry,
      'TetrahedronGeometry': THREE.TetrahedronGeometry,
      'TextGeometry': THREE.TextGeometry,
      'TorusGeometry': THREE.TorusGeometry,
      'TorusKnotGeometry': THREE.TorusKnotGeometry,
      'TubeGeometry': THREE.TubeGeometry,
      'WireframeGeometry': THREE.WireframeGeometry
    },
    'threejs-geometry/buffer': {
      'default': THREE.BufferGeometry,
      'BoxBufferGeometry': THREE.BoxBufferGeometry,
      'CircleBufferGeometry': THREE.CircleBufferGeometry,
      'ConeBufferGeometry': THREE.ConeBufferGeometry,
      'CylingderBufferGeometry': THREE.CylingderBufferGeometry,
      'DodecahedronBufferGeometry': THREE.DodecahedronBufferGeometry,
      'IcosahedronBufferGeometry': THREE.IcosahedronBufferGeometry,
      'InstancedBufferGeometry': THREE.InstancedBufferGeometry,
      'LatheBufferGeometry': THREE.LatheBufferGeometry,
      'OctahedronBufferGeometry': THREE.OctahedronBufferGeometry,
      'ParametricBufferGeometry': THREE.ParametricBufferGeometry,
      'PlaneBufferGeometry': THREE.PlaneBufferGeometry,
      'PolyhedronBufferGeometry': THREE.PolyhedronBufferGeometry,
      'RingBufferGeometry': THREE.RingBufferGeometry,
      'ShapeBufferGeometry': THREE.ShapeBufferGeometry,
      'SphereBufferGeometry': THREE.SphereBufferGeometry,
      'TetrahedronBufferGeometry': THREE.TetrahedronBufferGeometry,
      'TorusBufferGeometry': THREE.TorusBufferGeometry,
      'TorusKnotBufferGeometry': THREE.TorusKnotBufferGeometry,
      'TubeBufferGeometry': THREE.TubeBufferGeometry
    },
    'threejs-helpers': {
      'ArrowHelper': THREE.ArrowHelper,
      'AxisHelper': THREE.AxisHelper,
      'BoxHelper': THREE.BoxHelper,
      'CameraHelper': THREE.CameraHelper,
      'DirectionalLightHelper': THREE.DirectionalLightHelper,
      'FaceNormalsHelper': THREE.FaceNormalsHelper,
      'GridHelper': THREE.GridHelper,
      'PolarGridHelper': THREE.PolarGridHelper,
      'HemisphereLightHelper': THREE.HemisphereLightHelper,
      'PointLightHelper': THREE.PointLightHelper,
      'RectAreaLightHelper': THREE.RectAreaLightHelper,
      'SkeletonHelper': THREE.SkeletonHelper,
      'SpotLightHelper': THREE.SpotLightHelper,
      'VertexNormalsHelper': THREE.VertexNormalsHelper
    },
    'threejs-light': {
      'default': THREE.Light,
      'AmbientLight': THREE.AmbientLight,
      'DirectionalLight': THREE.DirectionalLight,
      'HemisphereLight': THREE.HemisphereLight,
      'PointLight': THREE.PointLight,
      'RectAreaLight': THREE.RectAreaLight,
      'SpotLight': THREE.SpotLight
    },
    'threejs-light/shadow': {
      'default': THREE.LightShadow,
      'DirectionalLightShadow': THREE.DirectionalLightShadow,
      'RectAreaLightShadow': THREE.RectAreaLightShadow,
      'SpotLightShadow': THREE.SpotLightShadow
    },
    'threejs-material': {
      'default': THREE.Material
    },
    'threejs-material/line': {
      'LineBasicMaterial': THREE.LineBasicMaterial,
      'LineDashedMaterial': THREE.LineDashedMaterial,
    },
    'threejs-material/mesh': {
      'MeshBasicMaterial': THREE.MeshBasicMaterial,
      'MeshDepthMaterial': THREE.MeshDepthMaterial,
      'MeshLambertMaterial': THREE.MeshLambertMaterial,
      'MeshNormalMaterial': THREE.MeshNormalMaterial,
      'MeshPhongMaterial': THREE.MeshPhongMaterial,
      'MeshPhysicalMaterial': THREE.MeshPhysicalMaterial,
      'MeshStandardMaterial': THREE.MeshStandardMaterial,
      'MeshToonMaterial': THREE.MeshToonMaterial
    },
    'threejs-material/points': {
      'default': THREE.PointsMaterial
    },
    'threejs-material/shader': {
      'default': THREE.ShaderMaterial,
      'RawShaderMaterial': THREE.RawShaderMaterial
    },
    'threejs-material/shadow': {
      'default': THREE.ShadowMaterial
    },
    'threejs-material/sprite': {
      'default': THREE.SpriteMaterial
    },
    'threejs-math': {
      'default': THREE.Math,
      'Color': THREE.Color,
      'Cylindrical': THREE.Cylindrical,
      'Euler': THREE.Euler,
      'Frustum': THREE.Frustum,
      'Interpolant': THREE.Interpolant,
      'Line3': THREE.Line3,
      'Plane': THREE.Plane,
      'Quaternion': THREE.Quaternion,
      'Ray': THREE.Ray,
      'Sphere': THREE.Sphere,
      'Spherical': THREE.Spherical,
      'Triangle': THREE.Triangle,
    },
    'threejs-math/box': {
      'Box2': THREE.Box2,
      'Box3': THREE.Box3
    },
    'threejs-math/matrix': {
      'Matrix3': THREE.Matrix3,
      'Matrix4': THREE.Matrix4
    },
    'threejs-math/vector': {
      'Vector2': THREE.Vector2,
      'Vector3': THREE.Vector3,
      'Vector4': THREE.Vector4
    },
    'threejs-object': {
      'default': THREE.Object3D,
      'Bone': THREE.Bone,
      'Group': THREE.Group,
      'LensFlare': THREE.LensFlare,
      'Line': THREE.Line,
      'LineSegments': THREE.LineSegments,
      'LOD': THREE.LOD,
      'Mesh': THREE.Mesh,
      'Points': THREE.Points,
      'Skeleton': THREE.Skeleton,
      'SkinnedMesh': THREE.SkinnedMesh,
      'Sprite': THREE.Sprite
    },
    'threejs-renderers': {
      'CanvasRenderer': THREE.CanvasRenderer,
      'WebGLRenderer': THREE.WebGLRenderer,
      'WebGLRenderTarget': THREE.WebGLRenderTarget,
      'WebGLRenderTargetCube': THREE.WebGLRenderTargetCube
    },
    'threejs-scene': {
      'default': THREE.Scene,
      'Fog': THREE.Fog,
      'FogExp2': THREE.FogExp2
    },
    'threejs-texture': {
      'default': THREE.Texture
    },
    'threejs-texture/canvas': {
      'CanvasTexture': THREE.CanvasTexture
    },
    'threejs-texture/compressed': {
      'CompressedTexture': THREE.CompressedTexture
    },
    'threejs-texture/cube': {
      'CubeTexture': THREE.CubeTexture
    },
    'threejs-texture/data': {
      'DataTexture': THREE.DataTexture
    },
    'threejs-texture/depth': {
      'DepthTexture': THREE.DepthTexture
    },
    'threejs-texture/video': {
      'VideoTexture': THREE.VideoTexture
    },
    'threejs-utils': {
      'CurveUtils': THREE.CurveUtils,
      'SceneUtils': THREE.SceneUtils,
      'ShapeUtils': THREE.ShapeUtils
    }
  };

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      Object.defineProperty(values, '__esModule', {
        value: true
      });

      return values;
    });
  }

  for (var name in shims) {
    generateModule(name, shims[name]);
  }
})();
