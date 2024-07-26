import { useEffect, useRef } from "react";
import * as THREE from "three";

const CubeComponent = ({
  indexFace,
  selectedFace,
  geometry,
  setSelectedFace,
  cube,
  setSelectedColor,
  color,
  selectedTexture,
  setSelectedTexture,
}) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  let faceEdges = null;

  const cubeRef = useRef(cube);

  scene.add(cube);

  const raycaster = new THREE.Raycaster();
  const edgesGeometry = new THREE.EdgesGeometry(geometry);
  const edgesMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);

  useEffect(() => {
    cubeRef.current = cube;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0x404040, 5);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0x404040, 35);
    scene.add(ambientLight);

    scene.add(edges);
    edges.visible = false;

    const initialRotation = new THREE.Euler(0.5, 0, 0, "XYZ");
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
      setSelectedColor("");

      if (event.target.tagName !== "CANVAS") {
        return;
      }

      if (faceEdges) {
        scene.remove(faceEdges);
        faceEdges = null;
      }

      mouse.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(cube);

      if (intersects.length > 0) {
        indexFace = intersects[0].face.materialIndex;
        setSelectedFace(indexFace);

        edges.visible = false;

        const selectedFaceGeometry = new THREE.PlaneGeometry(1, 1);

        switch (indexFace) {
          case 0:
            selectedFaceGeometry.rotateY(-Math.PI / 2);
            selectedFaceGeometry.translate(0.5, 0, 0);
            break;
          case 1:
            selectedFaceGeometry.rotateY(Math.PI / 2);
            selectedFaceGeometry.translate(-0.5, 0, 0);
            break;
          case 2:
            selectedFaceGeometry.rotateX(Math.PI / 2);
            selectedFaceGeometry.translate(0, 0.5, 0);
            break;
          case 3:
            selectedFaceGeometry.rotateX(Math.PI / 2);
            selectedFaceGeometry.translate(0, -0.5, 0);
            break;
          case 4:
            selectedFaceGeometry.rotateY(0);
            selectedFaceGeometry.translate(0, 0, 0.5);
            break;
          case 5:
            selectedFaceGeometry.rotateY(Math.PI);
            selectedFaceGeometry.translate(0, 0, -0.5);
            break;
          default:
            break;
        }

        const faceEdgesGeometry = new THREE.EdgesGeometry(selectedFaceGeometry);
        faceEdges = new THREE.LineSegments(faceEdgesGeometry, edgesMaterial);

        faceEdges.position.copy(cube.position);
        faceEdges.rotation.copy(cube.rotation);

        scene.add(faceEdges);
      } else {
        setSelectedFace(null);
      }
    };

    const onMouseMove = (event) => {
      if (isMouseDown) {
        if (event.target.tagName === "CANVAS") {
          const deltaX = event.clientX - startMouseX;
          const rotationAmount = (deltaX / window.innerWidth) * Math.PI * 2;
          cube.rotation.y = previousRotation.y + rotationAmount;

          if (faceEdges) {
            scene.remove(faceEdges);
            faceEdges = null;
          }
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
  }, [setSelectedFace]);

  useEffect(() => {
    console.log(color);
    if (selectedFace !== null && cubeRef.current) {
      const materials = cubeRef.current.material;

      if (selectedTexture ) {
        const loader = new THREE.TextureLoader();

        loader.load(selectedTexture, (texture) => {
          if (materials[selectedFace]) {
            materials[selectedFace].map = texture;
            materials[selectedFace].needsUpdate = true;
            setSelectedTexture('')
          }
        });
      } else if (color) {
        if (materials[selectedFace]) {
          materials[selectedFace].color.set(color);
          materials[selectedFace].needsUpdate = true;
        }
      }
    }
  }, [selectedFace, color, selectedTexture]);

  return null;
};

export default CubeComponent;
