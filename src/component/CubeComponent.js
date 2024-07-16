import React, { useEffect, useState } from "react";
import * as THREE from "three";

const CubeComponent = ({ setIntersects }) => {
  let indexFace = null;
  const [selectedFace, setSelectedFace] = useState(indexFace);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  let faceEdges = null;

  // Create the cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const materials = [
    new THREE.MeshPhongMaterial({ color: 0xff0000 }), // red
    new THREE.MeshPhongMaterial({ color: 0x00ff00 }), // green
    new THREE.MeshPhongMaterial({ color: 0x0000ff }), // blue
    new THREE.MeshPhongMaterial({ color: 0xffff00 }), // yellow
    new THREE.MeshPhongMaterial({ color: 0x00ffff }), // cyan
    new THREE.MeshPhongMaterial({ color: 0xff00ff }), // magenta
  ];
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);

  const raycaster = new THREE.Raycaster();
  const edgesGeometry = new THREE.EdgesGeometry(geometry);
  const edgesMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0x404040, 5);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0x404040, 35);
    scene.add(ambientLight);

    // Создаем обводку для каждой грани куба

    scene.add(edges);
    edges.visible = false; // Изначально скрываем обводку

    // Variables for rotation control
    const initialRotation = new THREE.Euler(0.5, 0, 0, "XYZ"); // стартовое позиция куба
    cube.rotation.copy(initialRotation);

    let isMouseDown = false;
    let previousRotation = new THREE.Euler();
    let startMouseX = 0;
    const mouse = new THREE.Vector2();

    const onMouseDown = (event) => {
      isMouseDown = true;
      previousRotation.copy(cube.rotation);
      startMouseX = event.clientX;
    };

    const onMouseUp = (event) => {
      isMouseDown = false;

      if (event.target.tagName === "BUTTON") {
        return;
      }

      if (faceEdges) {
        scene.remove(faceEdges);
        faceEdges = null;
      }

      // Detect click on the cube
      mouse.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      raycaster.setFromCamera(mouse, camera); // прицел от миши к камере

      const intersects = raycaster.intersectObject(cube);
      // setIntersects(intersects);

      if (intersects.length > 0) {
        // setSelectedSide(intersects[0].face.materialIndex);
        indexFace = intersects[0].face.materialIndex;
        // setSelectedFace(indexFace);
        // Скрываем обводку для всех граней
        edges.visible = false;

        // Показываем обводку только для выбранной грани
        const selectedFace = new THREE.PlaneGeometry(1, 1);

        // Устанавливаем позицию и ориентацию обводки в зависимости от выбранной грани
        switch (indexFace) {
          case 0:
            selectedFace.rotateY(-Math.PI / 2);
            selectedFace.translate(0.5, 0, 0);
            break;
          case 1:
            selectedFace.rotateY(Math.PI / 2);
            selectedFace.translate(-0.5, 0, 0);
            break;
          case 2:
            selectedFace.rotateX(Math.PI / 2);
            selectedFace.translate(0, 0.5, 0);
            break;
          case 3:
            selectedFace.rotateX(Math.PI / 2);
            selectedFace.translate(0, -0.5, 0);
            break;
          case 4:
            selectedFace.rotateY(0);
            selectedFace.translate(0, 0, 0.5);
            break;
          case 5:
            selectedFace.rotateY(Math.PI);
            selectedFace.translate(0, 0, -0.5);
            break;
          default:
            break;
        }

        const faceEdgesGeometry = new THREE.EdgesGeometry(selectedFace);
        faceEdges = new THREE.LineSegments(faceEdgesGeometry, edgesMaterial);

        faceEdges.position.copy(cube.position);
        faceEdges.rotation.copy(cube.rotation);
        // cube.material[selectedFace].color.set(0x0);

        scene.add(faceEdges);
      }
    };

    const onMouseMove = (event) => {
      if (isMouseDown) {
        const deltaX = event.clientX - startMouseX;
        const rotationAmount = (deltaX / window.innerWidth) * Math.PI * 2;
        cube.rotation.y = previousRotation.y + rotationAmount;

        if (faceEdges) {
          scene.remove(faceEdges);
          faceEdges = null;
        }
      }
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  const setColor = (event, value) => {
    event.stopPropagation();

    cube.material[indexFace].color.set(value);
  };

  return (
    <div>
      {["red", "green", "blue", "grey"].map((valueColor) => (
        <button
          key={valueColor}
          onClick={(event) => setColor(event, valueColor)}
        >
          {valueColor}
        </button>
      ))}
    </div>
  );
};

export default CubeComponent;
