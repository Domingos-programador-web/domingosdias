const chatWindow = document.getElementById('chat-window');
const chatTrigger = document.getElementById('chat-trigger');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const be = document.querySelector('div.before')
const perguntas = document.querySelectorAll('button.per')


perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', function() {
      userInput.value = ""
      userInput.value = this.innerHTML
  })
})

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
  chatMessages.insertBefore(div, be);
  //chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(query) {
  
  let response = `Eu só posso responder questões sobre o Domingos e seus projectos. Acesse ao site da Google se quiser saber sobre algo. <a href='https://google.com' class='googleLink' target='_blank'> click aqui para acessar a google</a>.`;
  
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