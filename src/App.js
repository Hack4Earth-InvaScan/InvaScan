import logo from './logo.svg';
import './App.css';
import { checkPlantInvasiveness } from './chatGPT';

function App() {
  async function handleClick() {
    console.log('clicked');
    const chatcontainer = document.querySelector('.chat-container');

    try {
        const result = await checkPlantInvasiveness("Garlic mustard", "Canada");
        chatcontainer.innerHTML = result.join('<br>');
         // Assuming result is an array of strings
    } catch (error) {
        console.error("Error:", error);
        chatcontainer.innerHTML = "Error fetching data!";
    }
}

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <div className='chat-container'> </div>
    </div>
  );
}

export default App;
