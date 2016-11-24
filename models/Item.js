const Quantity = require('./Quantity');
const Unit = require('./Unit');
const Money = require('js-money');


class Item {
  constructor(id)
  {
    this._id = id;
    this._name = '';
    this._description = '';
    this._quantity = 0;
    this._price = 0;
  }

  set id(value) {
    if (typeof value !== 'string'){
      throw Error("item id should be a string");
    }

    this._id = value;
  }
  get id() { return this._id; }

  set name(value) {
    if (typeof value !== 'string'){
      throw Error("item name should be a string");
    }

    this._name = value;
  }
  get name() { return this._name; }

  set desc(value) {
    if (typeof value !== 'string'){
      throw "item description should be a string";
    }

    this._description = value;
  }
  get desc() { return this._description; }

  set quantity(value){
    if (!(value instanceof Quantity))  {
      throw Error("quantity must be of type Quantity.");
    }

    this._quantity = value;
  }
  get quantity() { return this._quantity; }

  set price(value) {
    if (!(value instanceof Money)){
      throw Error("price must be of type Money.");
    }

    this._price = value;
  }
  get price() { return this._price; }
}

module.exports = Item;
