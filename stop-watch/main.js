var timer = {
  seconds: 0,
  limit: null,
  id: null
}

function start() {
  if (!timer.id) {
    timer.id = setInterval(function(){
      timer.seconds++
    },1000)
  }
}

function stop() {
  clearInterval(timer.id)
  timer.id=null
}

function update() {
    $time = document.querySelector('#time')
    $time.textContent = timer.seconds
}

var $start = document.querySelector('#start')
$start.addEventListener('click', start)

var $stop = document.querySelector('#stop')
$stop.addEventListener('click', stop)

setInterval(update, 16)
