class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() {
    var interval = setInterval(this.update(),1000);
  }
  stop() {
    clearInterval(interval);
  }
  update() {
      this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
    console.log("Direction: " + this.requests + " | Floor: " + this.floor);
  }
}

module.exports = Elevator;
