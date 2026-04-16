/*const knowledgeBase = [
      { keys: ["quem é domingos", "quem te criou", "quem é seu criador", "autor", "quem é Domingos"], response: "Fui concebido pelo mentor <code>Domingos Dias</code>. Ele é um desenvolvedor/programador focado em soluções inteligentes e interfaces de alta performance." },
      
      { keys: ["domingos dias", "domingos", "domingos dias dos santos antonio"], response: "<code>Esse nome</code>, é parecido com o nome do meu criador <code>Domingos Dias</code>, um excelente <b>Progrador/Desenvolvedor</b>" },
      
      { keys: ["domingos dias é bom", "conhece o domingos"], response: "Afirmativo. <code>Domingos Dias</code> é a mente por trás deste terminal. Sua lógica de programação é a base do meu processamento." },
      
      { keys: ["objetivo do domingos", "por que ele te criou", "te criou com qual finalidade", "te criou por que"], response: "O objetivo de <code>Domingos Dias</code> foi criar uma interface de chat que unisse a estética hacker/programação com a potência de uma IA responsiva." },
      
      // PROGRAMAÇÃO & TECH
      { keys: ["o que é html", "como funciona o html"], response: "O <code>HTML</code> é a espinha dorsal da web. Ele define a estrutura de tudo o que você vê aqui." },
      
      { keys: ["experiência profissional", "experiencia profissional", "experiências profissionais","experiencias profissionais"], response: ""
      
      },
      
      { keys: ["teu nome", "seu nome", "te chamas", "chamar você", "te chamar", "chamar-te", "chamar - te", "chamar- te", "chamar -te"], response: "Eu chamo - me <code>DiasBot</code>, sou um chat bot inteligente pronto para você." },
      
      { keys: ["o que é css", "css"], response: "O <code>CSS</code> é o que me torna bonito. É o responsável pelo meu 'Dark Mode' e pelo fundo de código que você vê." },
      
      { keys: ["javascript", "js"], response: "<code>JavaScript</code> é o meu cérebro. É o que permite que eu processe suas mensagens e responda em tempo real." },
      
      { keys: ["linguagem foste desenvolvido", "programado em qual linguagem", "programado em que linguagem", "foste desenvolvido em qual linguagem", "linguagem foste criado"], response: "<code>Domingos Dias</code> me desenvolveu totalmente com <code>JavaScript</code>, mas estou apto para programar em várias linguagens." },
      
      { keys: ["react", "framework"], response: "Frameworks como <code>React</code> ou <code>Vue</code> elevam o nível, mas este terminal foi feito em JS puro para máxima velocidade." },
      { keys: ["python"], response: "<code>Python</code> é excelente para IA e Data Science. Eu e ele falamos linguagens diferentes, mas temos o mesmo propósito: resolver problemas." },
      { keys: ["backend", "banco de dados"], response: "Para salvar nossas conversas para sempre, <code>Domingos Dias</code> sugere usar <code>Node.js</code> com <code>MongoDB</code>." },
      { keys: ["api", "fetch", "rest", "restfull"], response: "Uma <code>API</code> é uma ponte. Eu posso me conectar a qualquer cérebro externo através de requisições <code>fetch</code>." },
      
      // GERAIS & UTILITÁRIOS
      { keys: ["olá", "oi", "bom dia", "boa tarde", "tudo bem"], response: "Saudações. Assistente virtual <code>DiasBot</code> pronto para execução. Em que posso ajudar?" },
      
      { keys: ["como você funciona", "como funciona"], response: "Eu opero através de mapeamento de palavras-chave e lógica assíncrona baseada em JavaScript." },
      
      { keys: ["hora", "que horas são"], response: "Meu relógio interno marca exatamente <code>" + new Date().toLocaleTimeString() + "</code>." },
      
      { keys: ["data", "dia é hoje"], response: "Hoje é dia <code>" + new Date().toLocaleDateString() + "</code>." },
      
      { keys: ["clima", "tempo"], response: "Não tenho sensores térmicos, mas recomendo verificar o céu. Se houver muitos <code>bugs</code>, pode chover código!" },
      
      { keys: ["piada", "engraçado"], response: "Por que o programador faliu? Porque ele usou todo o seu <code>cache</code>!😂" },
      
      { keys: ["ajuda", "help", "o que você faz"], response: "Posso explicar conceitos de programação, falar sobre o meu criador <code>Domingos Dias</code> ou apenas conversar." },
      
      { keys: ["github"], response: "O <code>GitHub</code> é onde os repositórios de elite residem. Você provavelmente encontraria o código do Domingos por lá." },
      
      { keys: ["você fala inglês", "do you speak english", "fala inglês", "falar inglês", "gosta de inglês"], response: "That words answer your Asks 😁.\nUm <code>programador</code> Como eu deve falar Inglês." },
      
      { keys: ["IA", "inteligência artificial"], response: "Eu sou uma forma de IA baseada em regras. No futuro, <code>Domingos Dias</code> pode me conectar a redes neurais profundas." },
      
      { keys: ["obrigado", "valeu"], response: "Sem problemas. O código nunca dorme. Estarei aqui se precisar." },
      

      { keys: ["skill", "skills", "habilidades"], response: `As Skills Tech de Domingos Dias estam espelhadas neste portfólio. Dê uma olhada.` }
];*/

const knowledgeBase = [
       {keys: ["quem é domingos", "sobre o domingos"], response: "Domingos Dias dos Santos António, é um desenvolvedor <code>Full-Stack</code>. Trabalha com programação e desenvolvimento web." },
      
      { keys: ["quais são suas stack", "skills"], response: `Domingos Dias tem várias <code> Skills tech</code>. Dentre elas posso citar: <br/>
                  <code>1.React js</code> <br/>
                  <code>2.javascript</code> <br/>
                  <code>3.SQL </code> <br/>
                  <code>4.nodeJs </code><br/>
                  
                  As outras Skills estão espelhadas neste portfólio.
                  `
      },
      
      { keys: ["quais as suas experiências profissionais", "experiência profissional"], response: "Domingos trabalhou como desenvolvedor front end na start Up <code>N'gola tech</code> durante 2 anos. <br/> Trabalhou como Help desk e engenheiro de software, no atelier de beleza <code>Alzira Cabral</code>. Participou de feiras tecnológicas como Expesitor de projectos." },
      
      // PROGRAMAÇÃO & TECH
      { keys: ["quais serviços, domingos faz"], response: `Os serviços que Domingos oferece sao: <br/>
        1.<code>Web development</code>: construção de plataformas web.<br/>
        2.<code>Análise de sistemas</code>: Análise de performance de algoritmos.<br/>
        3.<code>E-commerce</code>: Desenvolvimento de marketplace. ` },
        
        { keys: ["quantos projectos estam no mercado"], response: `Domingos tem 9+ 💯 projectos no mercado.<br/>
          Os mais recentes são Katiana codex e o mundo Trad. Pode visita - los a partir deste portfólio.
          ` },
        
        { keys: ["como contacto - lo"], response: `Vc pode contactá-lo a partir das seguintes formas:<br/>
        1.WhatsApp:<code> 938858659</code>.<br/>
        2.Instagram:<code> _domingos_dias</code>.<br/>
        3.LinkEnd:<code> Domingos Dias dos Santos</code>.` },
        
        { keys: ["ola","olá","bom dia","boa tarde","boa noite","como está"], response: `Olá tudo bem? Em que posso ser útil?` }
]