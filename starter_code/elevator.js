class Elevator{
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start(){
    var interval = setInterval(this.update(),1000);
  }
  stop(){
    clearInterval(interval);
  }
  update(){
      this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp(){
    if(this.floor < this.MAXFLOOR){
      this.floor += 1;
    }
  }
  floorDown(){
    if(this.floor > 0){
      this.floor -= 1;
    }
  }
  call(){

  }
  log(){
    console.log("Direction: " + this.requests + " | Floor: " + this.floor);
  }
}

module.exports = Elevator;
