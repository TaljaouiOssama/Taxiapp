class Payment{
    _paymentId;
    get paymentId() {
        return this._paymentId;
    }
    set paymentId(value) {
        this._paymentId = value;
    }
    _paymentType;
    get paymentType() {
        return this._paymentType;
    }
    set paymentType(value) {
        this._paymentType = value;
    }
    _paymentAmount;
    get paymentAmount() {
        return this._paymentAmount;
    }
    set paymentAmount(value) {
        this._paymentAmount = value;
    }
    constructor(paymentId,paymentAmount,paymentType){
        this._paymentId=paymentId;
        this._paymentAmount=paymentAmount;
        this._paymentTotal=paymentType

    }
}