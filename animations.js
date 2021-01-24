let elMenuItem = document.getElementsByClassName("item-link")[0];

// First Icon event handling
elMenuItem.addEventListener('click', () => {
  console.log('element clicked!');
  elMenuItem.classList.toggle('active');
})


