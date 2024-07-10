import React, { useState, useEffect } from "react";
import * as THREE from "three";

const CubeComponent = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // Lighting to the scene
    const light = new THREE.DirectionalLight(0x404040, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 35);
    scene.add(ambientLight);

    // const helper = new THREE.PointLightHelper(light);
    // scene.add(helper);

    // Create the cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xff0000 }),
      new THREE.MeshPhongMaterial({ color: 0x00ff00 }),
      new THREE.MeshPhongMaterial({ color: 0x0000ff }),
      new THREE.MeshPhongMaterial({ color: 0xffff00 }),
      new THREE.MeshPhongMaterial({ color: 0x00ffff }),
      new THREE.MeshPhongMaterial({ color: 0xff00ff }),
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Set initial rotations to give perspective
    const cursor = {
      x: 0,
      y: 0,
      z: 0,
    };

    let isMouseDown = false;

    const onMouseDown = (event) => {
      isMouseDown = true;
    };

    const onMouseUp = (event) => {
      isMouseDown = false;
    };

    const onMouseMove = (event) => {
      cursor.x = event.clientX / window.innerWidth - 0.5;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    cube.rotation.x = 0.25;

    const animate = () => {
      if (isMouseDown) {
        cube.rotation.y = cursor.x * Math.PI * 2;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
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

  return null;
};

export default CubeComponent;
