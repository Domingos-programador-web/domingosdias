async function enviarMensagemParaIA(textoDoUsuario) {
  try {
    const resposta = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: textoDoUsuario })
    });
    
    const dados = await resposta.json();
    
    if (resposta.ok) {
      // Função que já deves ter para mostrar a resposta no chat do site
      adicionarMensagemNoChat(dados.reply, "bot");
    } else {
      adicionarMensagemNoChat("Erro: " + dados.error, "bot");
    }
  } catch (erro) {
    console.error("Erro de rede:", erro);
    adicionarMensagemNoChat("Não foi possível conectar ao assistente.", "bot");
  }
}