var timer = {
  seconds: 0,
  limit: null,
  id: null
}

function start() {
  timer.id = setInterval(function(){
    timer.seconds++
  },1000)
}

function update() {
    $time = document.querySelector('#time')
    $time.textContent = timer.seconds
}

var $start = document.querySelector('#start')
$start.addEventListener('click', start)
setInterval(update, 16)




/*
var $stop = document.querySelector('#stop')
#stop.addEventListener('click', stop)

function stop () {
clearInterval(watch.id)

}
*/
