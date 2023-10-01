import logo from './logo.svg';
import './App.css';
import React from 'react';
import Webcam from 'react-webcam';
import {useState, useCallback, useRef} from 'react';
import IconButton from '@mui/material/IconButton';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import UndoIcon from '@mui/icons-material/Undo';
import CheckIcon from '@mui/icons-material/Check';
import {grey} from '@mui/material/colors';
import recognize from './plantRecognition.js'
import {LinearProgress} from '@mui/material';

function App() {
  const webcamRef = useRef(null);
  const [webcamWidth, setWebcamWidth] = useState(500);
  const [webcamHeight, setWebcamHeight] = useState(500);
  const [cameraMode, setCameraMode] = useState('environment');
  const [mirrored, setMirrored] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [plantName, setPlantName] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = useCallback(() => {
    setImgSrc(null);
  }, []);

  const confirm = () => {
    setConfirmed(true);
    if (imgSrc) {
      setSpinner(true);
      recognize(imgSrc).then((data) => {
        console.log(data);
        setPlantName(data.Result[0].LatinName);
        console.log(plantName);
        setSpinner(false);
      });
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <div className='title'>
          <h1>InvaScan</h1>
        </div>
        {
          imgSrc ? (
            <>
              <img src={imgSrc} />
              {
                spinner ? (
                  <LinearProgress />
                ) : null
              }
              {
                confirmed ? (
                  <div className='result'>
                    <h2>{plantName}</h2>
                  </div>
                ) : null
              }
            </>
          ) : (
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
          )
        }
      </div>
      {
        imgSrc ? (
          // Photo taken and not confirmed
          confirmed ? null : (
            <>
              <IconButton
                color="primary"
                component="label"
                size='large'
                disableRipple
                style={{position: 'absolute', width: '120px', height: '120px', bottom: 10, left: "15%", transform: "translate(-50%, 0)", zIndex: 9999}}
                onClick={() => {
                  retake();
                }}
              >
                <UndoIcon sx={{color: grey[50]}} style={{transform: 'scale(1.5)'}} />
              </IconButton>
              <IconButton
                color="primary"
                component="label"
                size='large'
                disableRipple
                style={{position: 'absolute', width: '256px', height: '256px', bottom: 10, left: "50%", transform: "translate(-50%, 0)", zIndex: 9999}}
                onClick={() => {
                  confirm();
                }}
              >
                <CheckIcon sx={{color: grey[50]}} style={{transform: 'scale(5)'}} />
              </IconButton>
            </>
          )
        ) : (
          // Photo not taken
          <>
            <IconButton
              color="primary"
              component="label"
              size='large'
              disableRipple
              style={{position: 'absolute', width: '256px', height: '256px', bottom: 10, left: "50%", transform: "translate(-50%, 0)", zIndex: 9999}}
              onClick={() => {
                capture();
              }}
            >
              <CircleOutlinedIcon sx={{color: grey[50]}} style={{transform: 'scale(5)'}} />
            </IconButton>
            <IconButton
              color="primary"
              component="label"
              disableRipple
              style={{position: 'absolute', bottom: 10, right: 15, zIndex: 9999}}
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
              <CameraswitchIcon sx={{color: grey[50]}} />
            </IconButton>
          </>

        )
      }
    </div>
  );
}

export default App;
