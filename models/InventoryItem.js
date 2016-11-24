const Money = require('js-money');
const Item = require('./Item');
const Quantity = require('./Quantity');

class InventoryItem {
  constructor(item, stockAvailable){
    if (!(item instanceof Item)) {
        throw Error("item should be of type Item");
    }

    if (typeof stockAvailable !== 'number' && stockAvailable < 0) {
      throw Error("stockAvailable should a valid number and should not be negative");
    }

    this._item = item;
    this._stockAvailable = item.quantity.reset(0);
    this._stockWorth = item.price.multiply(0);

    this.addStock(stockAvailable)
  }

  get item(){
    return this._item;
  }

  get stockAvailable(){
    return this._stockAvailable;
  }

  get stockWorth() {
    return this._stockWorth;
  }

  addStock(stockAvailable){
    this._stockAvailable = this.stockAvailable.add(stockAvailable);
    this._stockWorth = this.item.price.multiply(this.stockAvailable.amount);
  }
}

module.exports = InventoryItem;
