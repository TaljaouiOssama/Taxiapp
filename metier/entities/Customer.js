class Customer extends User{
    
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
   
    
    constructor(userId,userEmail,userPassword,userFullName,userPicture){
        super(userId,userEmail,userPassword,userFullName,userPicture)
        this._totalRides=0
        this._wallet=0
    }
     rideSearch(){

    }
    rideRequest(){
  
    }
    rideCancel(){
  
    }
     viewTrackRide(){
  
    }
     payment(){
  
    }
     feedBack(){
  
    }
     rating(){
  
    }
     
}