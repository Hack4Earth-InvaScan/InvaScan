//import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    axios
      .post("https://localhost:8080/chat", { prompt})
      .then((res) =>{
        setResponse(res.data);
      })
      .catch((err) =>{
        console.error(err);
      });
  };
//   return (
//     <>
//     <div className="w-[720px] mx-auto py-24">
//       <div className='w-full justify-center items-center px-8'>
//         <from className="w-full text-center" onSubmit={handleSumbit}>
//           <div className='md-6'>
//             <label
//               className="block text-grey-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
//               htmlFor="inline-full-name"
//             >
//               Just say/ask something :
//             </label>
//           <div/>
//           <div className='py-4'>
//             <input
//               className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus'>
//             </></>
//   )
// }

export default App;
