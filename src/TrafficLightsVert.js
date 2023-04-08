import React, { useContext } from 'react';
import { ThemeContext } from './App';

function TrafficLightsVert() {
  const lightSwitchGreen = useContext(ThemeContext);
  const lightSwitchRed = useContext(ThemeContext);

  const greenLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: lightSwitchGreen ? 'rgb(20, 197, 20)' : 'rgb(6, 67, 6)',
  };

  const redLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: lightSwitchRed ? 'rgb(113, 37, 37)' : 'red',
  };

  const yellowLightOn = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: 'rgb(255, 255, 0)',
  };

  const yellowLightOff = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: 'rgb(104, 104, 14)',
  };

  const trafficContainer1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    width: '60px',
    height: '200px',
    position: 'relative',
    top: '40px',
    left: '300px',
  };

  const trafficContainer2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    width: '60px',
    height: '200px',
    position: 'relative',
    top: '300px',
    left: '300px',
  };

  return (
    <>
      <div style={trafficContainer1}>
        <object style={redLight}></object>
        <object style={yellowLightOff}></object>
        <object style={greenLight}></object>
      </div>
      <div style={trafficContainer2}>
        <object style={redLight}></object>
        <object style={yellowLightOff}></object>
        <object style={greenLight}></object>
      </div>
    </>
  );
}
export default TrafficLightsVert;
