class Driver extends User{
    _drivingLicence;
    get drivingLicence() {
        return this._drivingLicence;
    }
    set drivingLicence(value) {
        this._drivingLicence = value;
    }
    _wallet;
    get wallet() {
        return this._wallet;
    }
    set wallet(value) {
        this._wallet = value;
    }
    _totalRides;
    get totalRides() {
        return this._totalRides;
    }
    set totalRides(value) {
        this._totalRides = value;
    }
    _rating;
    get rating() {
        return this._rating;
    }
    set rating(value) {
        this._rating = value;
    }
    _isActive;
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    _car;
    get car() {
        return this._car;
    }
    set car(value) {
        this._car = value;
    }
    constructor(userId,userEmail,userPassword,userFullName,userPicture,drivingLicence){
        super(userId,userEmail,userPassword,userFullName,userPicture)
        this._drivingLicence=drivingLicence
        this._isActive=false
        this._rating=3
        this._totalRides=0
        this._wallet=0
    }
     modifyCar(){

    }
     acceptRide(){
  
    }
    cancleRide(){
  
    }
     startRide(){
  
    }
}