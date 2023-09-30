import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'my api key', 
});

async function checkPlantInvasiveness(plant, region) {
  const result = [];
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Is "${plant}" invasive in "${region}", please respond with 'Yes' or 'No'.`}],
    model: 'gpt-4',
  });

  result.push(chatCompletion.choices[0][text])

  await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Can you give me some information about "${plant}"?`}],
    model: 'gpt-4',
  });
  result.push(chatCompletion.choices[1][text])

  return result
}
