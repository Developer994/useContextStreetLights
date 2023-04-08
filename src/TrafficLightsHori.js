import React, { useContext } from 'react';
import { ThemeContext } from './App';

function TrafficLightsHori() {
  const lightSwitchGreen = useContext(ThemeContext);
  const lightSwitchRed = useContext(ThemeContext);

  const greenLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: lightSwitchGreen ? 'rgb(6, 67, 6)' : 'rgb(20, 197, 20)',
  };

  const redLight = {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    backgroundColor: lightSwitchRed ? 'red' : 'rgb(113, 37, 37)',
  };

  const trafficContainer3 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    width: '60px',
    height: '200px',
    position: 'relative',
    top: '-130px',
    left: '50px',
  };

  const trafficContainer4 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    width: '60px',
    height: '200px',
    position: 'relative',
    top: '-330px',
    left: '560px',
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

  return (
    <>
      <div style={trafficContainer3}>
        <object style={redLight}></object>
        <object style={yellowLightOff}></object>
        <object style={greenLight}></object>
      </div>
      <div style={trafficContainer4}>
        <object style={redLight}></object>
        <object style={yellowLightOff}></object>
        <object style={greenLight}></object>
      </div>
    </>
  );
}
export default TrafficLightsHori;
