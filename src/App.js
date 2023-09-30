import logo from './logo.svg';
import './App.css';
import React from 'react';
import Webcam from 'react-webcam';
import {useState, useCallback, useRef} from 'react';
import IconButton from '@mui/core/IconButton';
import DeleteIcon from '@mui/icons/Delete';
import CameraswitchIcon from '@mui/icons/CameraSwitch';
import { grey } from '@mui/core/colors';

function App() {
const webcamRef = useRef(null);
const [webcamWidth, setWebcamWidth] = useState(500);
const [webcamHeight, setWebcamHeight] = useState(500);
const [cameraMode, setCameraMode] = useState('user');
const [mirrored, setMirrored] = useState(true);

  return (
    <div className="App">
      <div className='container'>
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
        style={{ position: 'absolute', bottom: 10, left: 15, zIndex: 9999 }}
        onClick={() => {

        }}
      >
        <DeleteIcon sx={{ color: grey[50] }} />
      </IconButton>
    </div>
  );
}

export default App;
