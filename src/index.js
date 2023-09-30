//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const Configuration = require("openai");
const OpenAIApi = require("openai");
const config = new Configuration({apiKey: "复制api到这里"});

const openai = new OpenAIApi(config);

//setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

//endpoint for ChatGPT
app.post("/chat", async (req, res) => {

  const { prompt } = req.body;

  const completions = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });

  res.send(completions.data.choices[0].text);
})

const port = 8080;
app.listen(port,() => {
  console.log('Server listening on port ${port}');
});
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
