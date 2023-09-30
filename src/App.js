import logo from './logo.svg';
import './App.css';
import React from 'react';
import Webcam from 'react-webcam';
import {useState, useCallback, useRef} from 'react';
import IconButton from '@mui/material/IconButton';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import { grey } from '@mui/material/colors';

function App() {
const webcamRef = useRef(null);
const [webcamWidth, setWebcamWidth] = useState(500);
const [webcamHeight, setWebcamHeight] = useState(500);
const [cameraMode, setCameraMode] = useState('environment');
const [mirrored, setMirrored] = useState(false);

  return (
    <div className="App">
      <div className='container'>
        <div className='title'>
          <h1>InvaScan</h1>
        </div>
        <Webcam
          ref={webcamRef}
          muted
          videoConstraints={{
            width: webcamWidth,
            height: webcamHeight,
            facingMode: cameraMode,
          }}
          mirrored={mirrored}
        />
      </div>
      <IconButton
        color="primary"
        component="label"
        style={{ position: 'absolute', bottom: 10, right: 15, zIndex: 9999 }}
        onClick={() => {
          if (cameraMode === 'user') {
            setCameraMode('environment');
            setTimeout(() => {
              setMirrored(false);
            }, 740);
          } else {
            setCameraMode('user');
            setTimeout(() => {
              setMirrored(true);
            }, 740);
          }
        }}
      >
        <CameraswitchIcon sx={{ color: grey[50] }} />
      </IconButton>
      <IconButton
        color="primary"
        component="label"
        size='large'
        style={{ position: 'absolute', width: '256px', height: '256px',bottom: 10, left: "50%", transform: "translate(-50%, 0)", zIndex: 9999 }}
        onClick={() => {

        }}
      >
        <CircleOutlinedIcon sx={{ color: grey[50] }} style={{ transform: 'scale(5)' }} />
      </IconButton>
    </div>
  );
}

export default App;
