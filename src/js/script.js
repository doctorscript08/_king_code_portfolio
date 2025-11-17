const menu = document.querySelector('.menu .nav-list')
const btn = document.querySelector('.btn-menu')
const btnContacto = document.querySelector('.btn-contacto')
const links = document.querySelectorAll('.nav-link')

btn.addEventListener('click', () => {
  menu.classList.toggle('active')
  btn.classList.toggle('close')
  menu.classList.toggle('show')
  document.body.classList.toggle('no-scroll')

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active')
      btn.classList.remove('close')
      menu.classList.remove('show')
      document.body.classList.remove('no-scroll')
    })
  })
});




const cardFront = document.querySelector('#front-container')
const iconFront = document.querySelector(' #front-container .info-icon')
const profileFront = document.querySelector('#front-container .back-icon')

const cardBack = document.querySelector('#back-container')
const iconBack = document.querySelector('#back-container .info-icon')
const profileBack = document.querySelector('#back-container .back-icon')

iconFront.addEventListener('click', () => {
  cardFront.classList.toggle('flip')
})
profileFront.addEventListener('click', () => {
  cardFront.classList.toggle('flip')
})

iconBack.addEventListener('click', () => {
  cardBack.classList.toggle('flip')
})
profileBack.addEventListener('click', () => {
  cardBack.classList.toggle('flip')
})

const buttons = document.querySelectorAll('#services .card-desc .btn')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card-desc')
    const content = card.querySelector('#services .desc-service')
    content.classList.toggle('show-desc')

    if (content.classList.contains('show-desc')) {
      content.style.height = content.scrollHeight + 'px'
      content.style.opacity = '1'

      button.classList.add('menos')
    } else {
      content.style.height = '0px'
      content.style.opacity = '0'

      button.classList.remove('menos')
    }

    
  })
})

window.addEventListener('scroll', () =>{
    const header = document.querySelector('.nav-bar')
    header.classList.toggle('rolagem', window.scrollY > 0)

     const menus = document.querySelector('.nav-bar .nav-list') 
    menus.classList.toggle('rolagem', window.scrollY > 0)
  
})




const elements = document.querySelectorAll('p, h1, h2, h3, h4, span, strong')

function mostrarAoRolat() {
  const altura = innerHeight
  elements.forEach((element, index) => {
    const distanciaTopo = element.getBoundingClientRect().top
    const distanciaBottom = element.getBoundingClientRect().bottom

    if (distanciaTopo < altura - 100 && distanciaBottom > 0) {
      element.style.transitionDelay = '${index * 0.15}s'
      element.classList.add('visible')
    }else{
      element.classList.remove('visible')
      element.style.transitionDelay = '0s'
    }
  })
}

window.addEventListener('scroll', mostrarAoRolat)