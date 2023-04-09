import React, { useEffect, useState } from 'react';
import TrafficLightsVert from './TrafficLightsVert';
import TrafficLightsHori from './TrafficLightsHori';

export const ThemeContext = React.createContext();

function App() {
  const [lightSwitch, setLightSwitch] = useState(true);

  const toggleLight = () => {
    setLightSwitch((prevLightStatus) => !prevLightStatus);
  };

  function LightHandler() {
    setInterval(toggleLight, 1000);
  }

  return (
    <>
      <ThemeContext.Provider value={lightSwitch}>
        <button onClick={LightHandler}>Toggle</button>
        <TrafficLightsVert />
        <TrafficLightsHori />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
