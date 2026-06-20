function enviarMailtoGarantido(event) {
  // Evita o recarregamento padrão da página
  event.preventDefault();
  
  // 1. Defina o seu e-mail de destino aqui
  // 2. Captura dos dados inseridos no formulário
  const nome = document.getElementById('nome').value;
  
  const EMAIL = "domingosdias100@gmail.com"
  
  const emailInput = document.getElementById('email').value
  
  const telefone = document.getElementById('telefone').value;
  
  const mensagem = document.getElementById('mensagem').value;
  
  // 3. Assunto do e-mail
  const assunto = encodeURIComponent(document.getElementById('assunto').value);
  
  // 4. Construção do corpo do e-mail (com quebras de linha nativas de e-mail '%0D%0A')
  let corpoEmail = "Olá senhor Domingos Dias!\n\n";
  corpoEmail += "Nome: " + nome + "\n";
  corpoEmail += "Telefone: " + telefone + "\n";
  corpoEmail += "Email: " + emailInput + "\n\n";
  corpoEmail += "Mensagem:\n" + mensagem + "\n";
  
  // encodeURIComponent converte caracteres especiais e espaços de forma segura para URLs
  const corpoFormatado = encodeURIComponent(corpoEmail);
  
  // 5. Link completo do protocolo mailto
  const mailtoLink = `mailto:${EMAIL}?subject=${assunto}&body=${encodeURIComponent(corpoEmail)}`;
  
  // 6. MÉTODO GARANTIDO: Criar um elemento <a> temporário em memória
  const linkTemporario = document.createElement('a');
  linkTemporario.href = mailtoLink;
  linkTemporario.target = '_blank'; // Força a abertura segura sem bloquear a navegação atual
  
  // Adiciona o elemento ao documento rapidamente para o clique funcionar em navegadores rigorosos
  document.body.appendChild(linkTemporario);
  
  // Executa o clique programático
  linkTemporario.click();
  
  // Remove o elemento da memória após a execução
  document.body.removeChild(linkTemporario);
}
