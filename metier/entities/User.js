class User{
    _userId
    get userId() {
        return this._userId
    }
    set userId(value) {
        this._userId = value
    }
    _userEmail
    get userEmail() {
        return this._userEmail
    }
    set userEmail(value) {
        this._userEmail = value
    }
    _userPassword
    get userPassword() {
        return this._userPassword
    }
    set userPassword(value) {
        this._userPassword = value
    }
    _userFullName
    get userFullName() {
        return this._userFullName
    }
    set userFullName(value) {
        this._userFullName = value
    }
    _userPicture
    get userPicture() {
        return this._userPicture
    }
    set userPicture(value) {
        this._userPicture = value
    }
    constructor(userId,userEmail,userPassword,userFullName,userPicture){
            this._userId=userId
            this._userEmail=userEmail
            this._userPassword=userPassword
            this._userFullName=userFullName
            this._userPicture=userPicture
    }
    

     registe(){
         return this;
     }

     login(){
         return this;
     }
     


}