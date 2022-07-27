const faders = document.querySelectorAll('.fade-in'),
  appearOptions = { root: null, threshold: 0.5 },
  appearOnScroll = new IntersectionObserver(function (e, r) {
    e.forEach(e => {
      e.isIntersecting &&
        (e.target.classList.add('appear'), r.unobserve(e.target))
    })
  }, appearOptions)
faders.forEach(e => {
  appearOnScroll.observe(e)
})

const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close-icon')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
  navLinks.classList.add('show-nav')
  closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('show-nav')
})
