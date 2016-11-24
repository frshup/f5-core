const Unit = require('./Unit');

class Quantity {
    constructor(amount, unit){

      if (!(unit instanceof Unit.Unit)) throw "unit should be of type Unit";

      this._amount = amount;
      this._unit = unit;
    }

    set amount(value) { this._amount = value; }
    get amount() { return this._amount; }

    set unit(value) { this._unit = value; }
    get unit() { return this._unit; }

    add(value) {    
      return new Quantity(this.amount + value, this.unit);
    }
    reset(value) { return new Quantity(value, this.unit); }

    toString() { return `${this.amount} ${this.unit.name}`; }
}

module.exports = Quantity;
