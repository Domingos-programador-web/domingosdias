// pegar os elementos do html
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

async function botResponse(query) {
  const response = await enviarMensagemParaBot(
    {
      role: "user",
      content: query
    }
  )
  
  appendMessage(response, 'bot');
}



// Enviar com a tecla Enter
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
