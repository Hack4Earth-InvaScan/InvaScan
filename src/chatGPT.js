import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

async function checkPlantInvasiveness(plant, region) {
  const result = [];

  var chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Is "${plant}" invasive in "${region}", please only respond with 'Yes' or 'No'.`}],
    model: 'gpt-4',
  });
  result.push(chatCompletion.choices[0].text)

  chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Can you give me some information about "${plant}"?`}],
    model: 'gpt-4',
  });
  result.push(chatCompletion.choices[0].text)

  chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `If I found an invasive plant in "${region}", which relevant organization should I contact?`}],
    model: 'gpt-4',
  });
  result.push(chatCompletion.choices[0].text)

  console.log(result)

  return result
}

export { checkPlantInvasiveness };