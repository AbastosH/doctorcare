window.addEventListener(`scroll`, onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais dados vou precisar ?

  //o topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  /*  console.log(
    'O Topo da seção chegou ou passou da linha ?',
    sectionTopReachOrPassedTargetLine
  ) */

  //verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  //seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  /*  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline) */

  //limite da seção
  const sectionBounderies =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBounderies) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img,
  #home .stats,
  #services
  #services header,
  services .card,
  #about,
  #about header,
  #about .content`)

function show() {}
