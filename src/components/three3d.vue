<template>
  <div id='container'>
    <canvas id='c'>
    </canvas>
  </div>
</template>

<script>
import { WEBGL } from 'three/examples/jsm/WebGL.js'
import Main from './js/3dDataCenter.js'

export default {
  name: 'three3d',
  data () {
    return {
      title: 'three.js演示'
    }
  },
  created () {

  },
  mounted () {
    if ( WEBGL.isWebGLAvailable() ) {
      Main();
    } else {
      var warning = WEBGL.getWebGLErrorMessage();
      document.getElementById( 'container' ).appendChild( warning );
    }
  },
  methods: {
    // main () {
    //   const canvas = document.querySelector('#c');
    //   const renderer = new THREE.WebGLRenderer({canvas});

    //   const fov = 75;
    //   const aspect = 2;
    //   const near = 0.1;
    //   const far = 5;
    //   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    //   camera.position.z = 2;

    //   const scene = new THREE.Scene();
    //   scene.background = new THREE.Color('black');

    //   {
    //     const color = 0xFFFFFF;
    //     const intensity = 1;
    //     const light = new THREE.DirectionalLight(color, intensity);
    //     light.position.set(-1, 2, 4);
    //     scene.add(light);
    //   }

    //   const boxWidth = 1;
    //   const boxHeight = 1;
    //   const boxDepth = 1;
    //   const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    //   function makeInstance(geometry, color, x) {
    //     const material = new THREE.MeshPhongMaterial({color});

    //     const cube = new THREE.Mesh(geometry, material);

    //     cube.name = 'cube' + x
    //     cube.userData = {
    //       state: 'open'
    //     }
    //     cube.addEventListener( 'threejsclick', function ( event ) {
    //       let obj = event.pickedObject
    //       console.log( obj.id + ': ' + obj.name + ' -- ' + obj.userData.state );
          
    //       if (obj.userData.state === 'open') {
    //         obj.userData.state = 'close'
    //       } else {
    //         obj.userData.state = 'open'
    //       }
    //       requestRenderIfNotRequested()
    //     });

    //     scene.add(cube);

    //     cube.position.x = x;

    //     return cube;
    //   }

    //   makeInstance(geometry, 0x44aa88,  0)
    //   makeInstance(geometry, 0x8844aa, -2)
    //   makeInstance(geometry, 0xaa8844,  2)

    //   var container = document.getElementById( 'container' )
    //   var stats = new Stats();
    //   container.appendChild( stats.dom );
    //   const controls = new OrbitControls( camera, renderer.domElement );
    //   controls.enableDamping = true;
    //   controls.target.set(0, 0, 0);
    //   controls.update();
      
    //   function resizeRendererToDisplaySize(renderer) {
    //     const canvas = renderer.domElement;
    //     const width = canvas.clientWidth;
    //     const height = canvas.clientHeight;
    //     const needResize = canvas.width !== width || canvas.height !== height;
    //     if (needResize) {
    //       renderer.setSize(width, height, false);
    //     }
    //     return needResize;
    //   }

    //   let pickHelper = new PickHelper(THREE)
    //   threejsclick(pickHelper, scene, camera, canvas)

    //   // class PickHelper {
    //   //   constructor() {
    //   //     this.raycaster = new THREE.Raycaster();
    //   //     this.pickedObject = null;
    //   //     this.pickedObjectSavedColor = 0;
    //   //   }
    //   //   pick(normalizedPosition, scene, camera) {
    //   //     // restore the color if there is a picked object
    //   //     if (this.pickedObject) {
    //   //       this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
    //   //       this.pickedObject = undefined;
    //   //     }

    //   //     // cast a ray through the frustum
    //   //     this.raycaster.setFromCamera(normalizedPosition, camera);
    //   //     // get the list of objects the ray intersected
    //   //     const intersectedObjects = this.raycaster.intersectObjects(scene.children);
    //   //     if (intersectedObjects.length) {
    //   //       // pick the first object. It's the closest one
    //   //       this.pickedObject = intersectedObjects[0].object;
    //   //       // save its color
    //   //       this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
    //   //       // set its emissive color to flashing red/yellow
    //   //       this.pickedObject.material.emissive.setHex(0xFFFF00);

    //   //       this.pickedObject.dispatchEvent( { type: 'start', message: this.pickedObject.id + ': ' + this.pickedObject.name + ' -- ' + this.pickedObject.userData.state} );
    //   //       if (this.pickedObject.userData.state === 'open') {
    //   //         this.pickedObject.userData.state = 'close'
    //   //       } else {
    //   //         this.pickedObject.userData.state = 'open'
    //   //       }
    //   //     }
    //   //   }
    //   // }

    //   // const pickPosition = {x: 0, y: 0};
    //   // const pickHelper = new PickHelper();
    //   // clearPickPosition();

    //   let renderRequested = false;
    //   function render() {
    //     renderRequested = undefined;

    //     if (resizeRendererToDisplaySize(renderer)) {
    //       const canvas = renderer.domElement;
    //       camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //       camera.updateProjectionMatrix();
    //     }

    //     controls.update();
    //     renderer.render(scene, camera);
    //   }
    //   render();

    //   function requestRenderIfNotRequested() {
    //     if (!renderRequested) {
    //       renderRequested = true;
    //       requestAnimationFrame(render);
    //     }
    //   }

    //   controls.addEventListener('change', requestRenderIfNotRequested);
    //   window.addEventListener('resize', requestRenderIfNotRequested);
    //   // requestAnimationFrame(render);

    //   // const maxClickTimeMs = 200;
    //   // const maxMoveDeltaSq = 5 * 5;
    //   // const startPosition = {};
    //   // let startTimeMs;
       
    //   // function recordStartTimeAndPosition(event) {
    //   //   startTimeMs = performance.now();
    //   //   const pos = getCanvasRelativePosition(event);
    //   //   startPosition.x = pos.x;
    //   //   startPosition.y = pos.y;
    //   // }

    //   // function getCanvasRelativePosition(event) {
    //   //   const rect = canvas.getBoundingClientRect();
    //   //   return {
    //   //     x: event.clientX - rect.left,
    //   //     y: event.clientY - rect.top,
    //   //   };
    //   // }

    //   // function setPickPosition(event) {
    //   //   const pos = getCanvasRelativePosition(event);
    //   //   pickPosition.x = (pos.x / canvas.clientWidth ) *  2 - 1;
    //   //   pickPosition.y = (pos.y / canvas.clientHeight) * -2 + 1;  // note we flip Y
    //   // }

    //   // function clearPickPosition() {
    //   //   // unlike the mouse which always has a position
    //   //   // if the user stops touching the screen we want
    //   //   // to stop picking. For now we just pick a value
    //   //   // unlikely to pick something
    //   //   pickPosition.x = -100000;
    //   //   pickPosition.y = -100000;
    //   // }

    //   // window.addEventListener('mousemove', setPickPosition)
    //   window.addEventListener('mouseout', requestRenderIfNotRequested)
    //   window.addEventListener('mouseleave', requestRenderIfNotRequested)

    //   // window.addEventListener('mousedown', recordStartTimeAndPosition)
    //   // window.addEventListener('mouseup', function(){
    //   //   // if it's been a moment since the user started
    //   //   // then assume it was a drag action, not a select action
    //   //   const clickTimeMs = performance.now() - startTimeMs;
    //   //   if (clickTimeMs > maxClickTimeMs) {
    //   //     return;
    //   //   }
       
    //   //   // if they moved assume it was a drag action
    //   //   const position = getCanvasRelativePosition(event);
    //   //   const moveDeltaSq = (startPosition.x - position.x) ** 2 +
    //   //                       (startPosition.y - position.y) ** 2;
    //   //   if (moveDeltaSq > maxMoveDeltaSq) {
    //   //     return;
    //   //   }
    //   //   pickHelper.pick(pickPosition, scene, camera);
    //   //   requestRenderIfNotRequested()
    //   // })

    //   // var Car = function () {
    //   //   this.start = function () {
    //   //     this.dispatchEvent( { type: 'start', message: 'Car vroom!' } );
    //   //   };
    //   // };
    //   // var Bus = function () {
    //   //   this.start = function () {
    //   //     this.dispatchEvent( { type: 'start', message: 'Bus vroom!' } );
    //   //   };
    //   // };
    //   // // 将 EventDispatcher.prototype 与自定义对象 prototype 进行混合
    //   // Object.assign( Car.prototype, THREE.EventDispatcher.prototype );
    //   // Object.assign( Bus.prototype, THREE.EventDispatcher.prototype );
    //   // // 使用自定义对象的事件
    //   // var car = new Car();
    //   // var bus = new Bus();
    //   // car.addEventListener( 'start', function ( event ) {
    //   //   console.log( event.message );
    //   // } );
    //   // bus.addEventListener( 'start', function ( event ) {
    //   //   console.log( event.message );
    //   // } );
    //   // car.start();
    // }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#c {
  width: 100%;
  height: 100%;
  display: block;
}
#c:focus {
  outline: none;
}
</style>
