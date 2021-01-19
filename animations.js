//var el = document.getElementById('calendar')

//el.onclick = function () {
//console.log('Click just happened')
//}

let calendar = document.getElementById('calendar')
let circleIcon = document.getElementById('circle')

let clickHandlerCalendar = function () {
  console.log('Click just happened')
  if (this.classList.contains('active')) {
    console.log('This class is active')
    this.classList.remove('active')
    circleIcon.classList.add('active')
  } else {
    console.log('There is no active class!')
  }
}

calendar.addEventListener('click', clickHandlerCalendar)

let clickHandlerCircle = function () {
  console.log('Click event on circle is ok!')
  if (circleIcon.classList.contains('active')) {
    circleIcon.classList.remove('active')
    calendar.classList.add('active')
  } else {
    console.log('Issue on clickHandlerCircle')
  }
}

circleIcon.addEventListener('click', clickHandlerCircle)
