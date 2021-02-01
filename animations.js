let elMenuItems = document.getElementsByClassName('item-link')

Array.from(document.getElementsByClassName('item-link')).forEach(function (
  element,
  index,
  array
) {
  element.addEventListener('click', () => {
    element.classList.toggle('active')
  })
})


