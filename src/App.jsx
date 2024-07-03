import './App.css';
import "aframe";
import universe from  "./vaporwave_mountains.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function App() {
  const loader = new GLTFLoader();
  loader.load(universe, (d) => {
    const entity = document.getElementById("universe");
    entity.object3D.add(d.scene);
  })
  return (
      <a-scene>
        <a-glb-model position="0 0 0" src="./starwars.glb"></a-glb-model>
        <a-entity id="universe" position="0 0 0" scale="15 15 15"></a-entity>
      </a-scene>
  );
}

export default App;