const chatWindow = document.getElementById('chat-window');
const chatTrigger = document.getElementById('chat-trigger');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');



// Abre/Fecha o chat
function toggleChat() {
  const isVisible = chatWindow.style.display === 'flex';
  chatWindow.style.display = isVisible ? 'none' : 'flex';
}


chatTrigger.addEventListener('click', toggleChat);

// Lógica de envio de mensagem
function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;
  
  // Adiciona mensagem do usuário
  appendMessage(text, 'user');
  userInput.value = "";
  
  // Resposta automática do Bot (Simulação)
  setTimeout(() => {
    botResponse(text.toLowerCase());
  }, 600);
}



function appendMessage(text, side) {
  const div = document.createElement('div');
  div.className = `msg ${side}`;
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(query) {
  
  const respostasAlternativas = [
      `Comando <code>'${query}'</code> não reconhecido no banco de dados principal. <code>Domingos Dias</code> ainda está expandindo meus módulos de linguagem.`,

      'Não encontrei uma resposta para sua pergunta. A minha base de conhecimento, ainda é muito limitada',

      '<code>Erro no servidor ❌</code>.\n\n😅 Estou a brincar não sei a resposta para a sua pergunta, sou um pouco carneiro.😁'
    ]
    
    const resAlt = Math.floor(Math.random() * respostasAlternativas.length)
    
  let response = respostasAlternativas[resAlt];
  
  for (let item of knowledgeBase) {
  if (item.keys.some(key => query.includes(key))) {
    response = item.response;
  }
}
  appendMessage(response, 'bot');
}



// Enviar com a tecla Enter
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});