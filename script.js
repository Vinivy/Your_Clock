const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

let result = setInterval(function time() {
  let datetoday = new Date()
  let hr = datetoday.getHours()
  let mn = datetoday.getMinutes()
  let sg = datetoday.getSeconds()

  if (hr < 10) hr = '0' + hr
  if (mn < 10) mn = '0' + mn
  if (sg < 10) sg = '0' + sg

  horas.textContent = hr
  minutos.textContent = mn
  segundos.textContent = sg
})
