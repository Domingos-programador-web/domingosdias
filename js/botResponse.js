let historicoDeConversa = []
async function enviarMensagemParaBot(mensagem) {
  historicoDeConversa.push(mensagem)
  try {
    const response = await fetch('https://groq-bot-dun.vercel.app/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages: historicoDeConversa })
    });
    
    const data = await response.json();
    
    historicoDeConversa.push({role: "assistant", content: data.reply})
    
    console.log(historicoDeConversa)
    return data.reply; // Resposta gerada pela !
  } catch (error) {
    console.error('Erro:', error);
    return 'Desculpa, ocorreu um erro de conexão.';
  }
}