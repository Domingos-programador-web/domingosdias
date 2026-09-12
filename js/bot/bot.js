/*// pegar os elementos do html
const chatWindow = document.getElementById('chat-window');
const chatTrigger = document.getElementById('chat-trigger');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const be = document.querySelector('div.before')
const perguntas = document.querySelectorAll('button.per')


// adiciona o click em todas as perguntas em forma de loop
perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', function() {
    
    // chamada da função, quando o user clica em uma pergunta
    addContNoInput(this)
  })
})


// Função que adiciona a pergunta no input
function addContNoInput(box) {
  userInput.value = ""
  userInput.value = box.innerHTML
}

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
  chatMessages.scrollTop = perguntas[0].scrollHeight;
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
*/

// Pegar os elementos do HTML
const chatWindow = document.getElementById('chat-window');
const chatTrigger = document.getElementById('chat-trigger');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const be = document.querySelector('div.before')
const perguntas = document.querySelectorAll('button.per')


// Adiciona o click em todas as perguntas em forma de loop
perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', function() {
    // Chamada da função, quando o user clica em uma pergunta
    addContNoInput(this)
  })
})


// Função que adiciona a pergunta no input
function addContNoInput(box) {
  userInput.value = ""
  userInput.value = box.innerHTML
}

// Abre/Fecha o chat
function toggleChat() {
  const isVisible = chatWindow.style.display === 'flex';
  chatWindow.style.display = isVisible ? 'none' : 'flex';
}

chatTrigger.addEventListener('click', toggleChat);

// Lógica de envio de mensagem modificada para chamar a Groq
function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;
  
  // Adiciona a mensagem do usuário no chat
  appendMessage(text, 'user');
  userInput.value = "";
  
  // Mostra um indicador de carregamento opcional (ou aguarda a resposta)
  // Chama a função assíncrona que fala com a API da Groq na Vercel
  obterRespostaDaGroq(text);
}

function appendMessage(text, side) {
  const div = document.createElement('div');
  div.className = `msg ${side}`;
  div.innerHTML = text;
  chatMessages.insertBefore(div, be);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Corrigido para rolar o container de mensagens corretamente
}

// Nova função que comunica com a Serverless Function da Vercel (Groq)
async function obterRespostaDaGroq(query) {
  try {
    // Exibe opcionalmente uma mensagem de "A pensar..."
    // (Opcional, podes criar um elemento temporário se quiseres)
    
    const respostaServidor = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: query })
    });
    
    const dados = await respostaServidor.json();
    
    if (respostaServidor.ok) {
      // Adiciona a resposta real gerada pela IA da Groq
      appendMessage(dados.reply, 'bot');
    } else {
      appendMessage(`Erro: ${dados.error || 'Não foi possível obter resposta.'}`, 'bot');
    }
    
  } catch (erro) {
    console.error("Erro na requisição:", erro);
    appendMessage("Desculpa, ocorreu um erro de conexão com o assistente.", 'bot');
  }
}

// Enviar com a tecla Enter
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

