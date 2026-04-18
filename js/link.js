const links = [
  {
    id :1,
    rede: 'facebook',
    desc: 'link que desvia para minha página do Facebook',
    link: `https://www.facebook.com/domingosdiasdossantos`
  },
  {
    id :2,
    rede: 'instagram',
    desc: 'link que desvia para minha conta do Instagram',
    link: `https://www.instagram.com/_domingos_dias`
  }, 
  {
    id :3,
    rede: 'github',
    desc: 'link que desvia para minha página do GitHub',
    link: `https://www.linkedin.com/in/domingos-dias-dos-santos-378630331?utm_source=share_via&utm_content=profile&utm_medium=member_android`
  }, 
  {
    id :4,
    rede: 'Email',
    desc: 'link que desvia para o meu e-mail, com uma mensagem e assunto pre escrito.',
    link: `mailto: domingosdias1010@gmail.com?subject=Solicitação de um projecto web&body=Olá, Senhor Domingos, precisamos dos teus serviços!`
  },
  {
    id :5,
    rede: 'whatsApp',
    desc: 'link que desvia para uma conversa no WhatsApp com Domingos Dias [938858658], com uma mensagem pré definida',
    link: `https://wa.me/244938858659?text=Olá 👋, senhor Dias!`
  }
]

let redes = document.querySelectorAll('.social-media a')

let whatsapp = document.querySelector('.wa-link')
let facebook = redes[0]
let instagram = redes[1]
let github = redes[2]
let email = redes[3]

facebook.setAttribute('href',`${links[0].link}`)
instagram.setAttribute('href',`${links[1].link}`)
github.setAttribute('href',`${links[2].link}`)
email.setAttribute('href',`${links[3].link}`)
whatsapp.setAttribute('href',`${links[4].link}`)

