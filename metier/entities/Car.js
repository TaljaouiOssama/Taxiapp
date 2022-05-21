class Car{
    _carId;
    get carId() {
        return this._carId;
    }
    set carId(value) {
        this._carId = value;
    }
    _carModel;
    get carModel() {
        return this._carModel;
    }
    set carModel(value) {
        this._carModel = value;
    }
    _registrationNumber;
    get registrationNumber() {
        return this._registrationNumber;
    }
    set registrationNumber(value) {
        this._registrationNumber = value;
    }
    _carPicture;
    get carPicture() {
        return this._carPicture;
    }
    set carPicture(value) {
        this._carPicture = value;
    }
    constructor(carId,carModel,registrationNumber,carPicture){
        this._carId=carId;
        this._carModel=carModel;
        this._registrationNumber=registrationNumber;
        this._carPicture=carPicture;
    }

}