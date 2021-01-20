let calendar = document.getElementById('calendar')
let circleIcon = document.getElementById('circle')
let searchIcon = document.getElementById('search')

// First Icon event handling
calendar.addEventListener('click', () => {
  calendar.classList.toggle('active')
  circleIcon.classList.toggle('active')
})

circleIcon.addEventListener('click', () => {
  circleIcon.classList.toggle('active')
  calendar.classList.toggle('active')
})
