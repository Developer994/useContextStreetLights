import React, { useEffect, useState } from 'react';
import TrafficLightsVert from './TrafficLightsVert';
import TrafficLightsHori from './TrafficLightsHori';

export const ThemeContext = React.createContext();

function App() {
  const [lightSwitch, setLightSwitch] = useState(true);
  // const [vertlightSwitch, setVertLightSwitch] = useState(true); // Top and bottom light switches
  // const [horlightSwitch, setHorLightSwitch] = useState(false); // Left and right light switches

  const toggleLight = () => {
    setLightSwitch((prevLightStatus) => !prevLightStatus);
    // setVertLightSwitch((prevVertLightStatus) => !prevVertLightStatus);
    // setHorLightSwitch((prevHorLightStatus) => !prevHorLightStatus);
  };

  // useEffect(() => {
  //   setTimeout(toggleLight, 3000);
  // });

  return (
    <>
      <ThemeContext.Provider value={lightSwitch}>
        <TrafficLightsVert />
        <TrafficLightsHori />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
