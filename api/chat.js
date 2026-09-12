import Groq from "groq-sdk";
import { portfolioKnowledge } from "../knowledge.js";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'A mensagem é obrigatória.' });
        }

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `Tu és o assistente virtual inteligente do portfólio do Domingos Dias. Usa estritamente estas informações reais para responder de forma simpática e profissional:\n\n${portfolioKnowledge}`
                },
                {
                    role: "user",
                    content: message
                }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 500
        });

        const reply = chatCompletion.choices[0]?.message?.content || "Desculpa, não consegui gerar uma resposta.";
        return res.status(200).json({ reply });

    } catch (error) {
        console.error("Erro na API da Groq:", error);
        return res.status(500).json({ error: 'Erro interno ao processar a mensagem.' });
    }
}