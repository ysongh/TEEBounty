import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'body-parser';
import OpenAI from 'openai';

dotenv.config();

const { json } = pkg;
const app = express();
const port = 4000;

const client = new OpenAI({
    baseURL: 'https://nilai-a779.nillion.network/v1',
    apiKey: process.env.NILAI_API_KEY || 'YOUR_API_KEY_HERE'
});

app.use(cors());

app.use(json());

app.post('/verifycode', async (req, res) => {
    const code = req.body.code;
  
    try {
        const response = await client.chat.completions.create({
            model: 'meta-llama/Llama-3.1-8B-Instruct',
            messages: [
                {
                role: 'system',
                content: 'You are a Senior Developer.'
                },
                {
                role: 'user',
                content: `What does this code do? ${code}`
                }
            ],
            stream: false
        });
      
        console.log(`Signature: ${response.signature}`);
        console.log(`Response: ${response.choices[0].message.content}`);
  
      res.json({ text: response.choices[0].message.content });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
});

app.get('/', (req, res) => res.send('It Work'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
