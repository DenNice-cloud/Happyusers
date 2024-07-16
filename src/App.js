import React, {useState} from 'react';
import CubeComponent from './component/CubeComponent';

const App = () => {
  const [intersects, setIntersects] = useState([]);

  return (
    <div className="App">
      {/* {intersects.length > 0 && (
        <div>
          {["red", "green", "blue", "grey"].map((valueColor) => (
            <button
              key={valueColor}
              // onClick={(event) => setColor(event, valueColor)}
            >
              {valueColor}
            </button>
          ))}
        </div>
      )} */}
      <CubeComponent setIntersects={setIntersects} />
    </div>
  );
};

export default App;
