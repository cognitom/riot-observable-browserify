var riot = require('riot')
require('./components/receiver.html')
var receiver = riot.mount('receiver')[0]

function Timer() {
  riot.observable(this)

  setTimeout(function() {
    this.trigger('ring')
  }.bind(this), 3000)
}

var timer = new Timer()

timer.on('ring', receiver.wakeup)
