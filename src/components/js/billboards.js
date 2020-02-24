import * as THREE from 'three'

function makeLabelCanvas(baseWidth, size, name) {
  const borderSize = 2;
  const ctx = document.createElement('canvas').getContext('2d');
  const font =  `${size}px bold sans-serif`;
  ctx.font = font;
  // measure how long the name will be
  const textWidth = ctx.measureText(name).width;

  const doubleBorderSize = borderSize * 2;
  const width = baseWidth + doubleBorderSize;
  const height = size + doubleBorderSize;
  ctx.canvas.width = width;
  ctx.canvas.height = height + 5;

  // need to set font again after resizing canvas
  ctx.font = font;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';

  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, width, height);

  ctx.beginPath();
  ctx.moveTo(width/2 - 4, height);
  ctx.lineTo(width/2, height + 5);
  ctx.lineTo(width/2 + 4, height);
  ctx.fill();

  // scale to fit but don't stretch
  const scaleFactor = Math.min(1, baseWidth / textWidth);
  ctx.translate(width / 2, height / 2);
  ctx.scale(scaleFactor, 1);
  ctx.fillStyle = 'white';
  ctx.fillText(name, 0, 0);

  return ctx.canvas;
}

function makeLabel (position, labelWidth, size, name) {
  const canvas = makeLabelCanvas(labelWidth, size, name);
  const texture = new THREE.CanvasTexture(canvas);
  // because our canvas is likely not a power of 2
  // in both dimensions set the filtering appropriately.
  texture.minFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  const labelMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
  });

  const labelBaseScale = 1;
  const label = new THREE.Sprite(labelMaterial);
  label.position.x = position.x
  label.position.y = position.y + size * labelBaseScale;
  label.scale.x = canvas.width  * labelBaseScale;
  label.scale.y = canvas.height * labelBaseScale;

  return label
}

export default makeLabel

