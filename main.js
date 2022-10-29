const menuBtn = document.getElementById('menuBtn')
const xBtn = document.getElementById('bx-x')
const menu = document.getElementById('menu')

menuBtn.onclick = () => {
  menu.classList.toggle('active')
}
xBtn.onclick = () => {
  menu.classList.remove('active')
}
