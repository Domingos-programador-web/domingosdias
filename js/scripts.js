const biografia = [
    {
      txtBio: "Domingos Dias dos Santos António, natural de kwanza Norte, nascido em 2007, formando – se em técnicas de informática, área que lhe proporcionou uma base sólida em programação e desenvolvimento web, tem formação em Inglês, Oratória e em Marketing digital. Desde cedo demonstrou interesse por computadores e pelo impacto que a tecnologia pode ter na vida das pessoas, o que levou a aprofundar seus estudos em linguagens de programação e desenvolvimento web. Em 2023, Domingos começou sua jornada como desenvolvidor web, trabalhando no entanto com linguagem simples (HTML, CSS e JS), solucionando problemas simples usando lógica de programação. Recentemente, aperfeiçou suas habilidades em programação utilizando linguagens como: Python, PHP, SQL e C#, itengrações de APIs e Machine Learning (aprendizado de máquinas)."
    },
    {
      txtBtn: "Ver Mais"
    }
  ]
  
  
const textoBio = biografia[0].txtBio
const paragrafoBio = document.querySelector('p.pBio')

const verMais = document.createElement('span')

verMais.classList.add('btn-ver')
verMais.textContent = biografia[1].txtBtn

paragrafoBio.innerHTML = textoBio.slice(0, 297)+'...<br/><br/>'
paragrafoBio.appendChild(verMais)

verMais.addEventListener('click', ()=>{
  paragrafoBio.textContent = textoBio
})




        // Menu Hamburguer
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.navbar a');
        
        menuIcon.onclick = () => {
          navbar.classList.toggle('active');
          menuIcon.classList.toggle('fa-times');
        };
        
        navLinks.forEach(link => {
          link.onclick = () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-times');
          };
        });
        
        // Efeito de Escrita (Typing Effect)
        const typed = new Typed('.typing-text', {
          strings: ['Desenvolvedor Full-Stack', 'Help Desk', 'Empreendedor Tech','Engenheiro de Software'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
        });
        
        // Toggle Dark/Light Mode
        const themeToggle = document.querySelector('#theme-toggle');
        themeToggle.onclick = () => {
          const isDark = document.body.getAttribute('data-theme') === 'dark';
          document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
          themeToggle.classList.toggle('fa-sun');
          themeToggle.classList.toggle('fa-moon');
        };
        
  