class Ride{
  _rideID;
    get rideID() {
        return this._rideID;
    }
    set rideID(value) {
        this._rideID = value;
    }
  _pickUpTime;
    get pickUpTime() {
        return this._pickUpTime;
    }
    set pickUpTime(value) {
        this._pickUpTime = value;
    }
  _pickUpFrom;
    get pickUpFrom() {
        return this._pickUpFrom;
    }
    set pickUpFrom(value) {
        this._pickUpFrom = value;
    }
  _pickUpTo;
    get pickUpTo() {
        return this._pickUpTo;
    }
    set pickUpTo(value) {
        this._pickUpTo = value;
    }
  _driver;
    get driver() {
        return this._driver;
    }
    set driver(value) {
        this._driver = value;
    }
  _customer;
    get customer() {
        return this._customer;
    }
    set customer(value) {
        this._customer = value;
    }
  _payment;
    get payment() {
        return this._payment;
    }
    set payment(value) {
        this._payment = value;
    }
    constructor(rideID,pickUpFrom,pickUpTo,pickUpTime,driver,customer,payment){
        this._rideID=rideID;
        this._pickUpFrom=pickUpFrom;
        this._pickUpTo=pickUpTo;
        this.pickUpTime=pickUpTime;
        this._driver=driver;
        this._customer=customer;
        this.payment=payment;
    }
    cost(){

    }
    summary(){

    }
}