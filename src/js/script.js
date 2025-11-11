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

    const conteudo = card.querySelector('#services .desc-service')

    conteudo.classList.toggle('show-desc')
  })
})




