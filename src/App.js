import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('clicked');
    const chatcontainer = document.querySelector('.chat-container');
    chatcontainer.innerHTML = 'clicked';
    // Run your function here, and change the HTML in the chat container.
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <div className='chat-container'> </div>
    </div>
  );
}

export default App;
