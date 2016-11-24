const Item = require('./Item');
const InventoryItem = require('./InventoryItem');

class Inventory {
  constructor(){
    this.items = new Map();
  }

  add(item, stockAvailable){
    if (!(item instanceof Item)){
      throw Error("Only an Item can be added to Inventory.");
    }

    let inventoryItem = this.items.get(item.id);
    if (typeof inventoryItem !== 'undefined'){
      inventoryItem.addStock(stockAvailable)
    }
    else{
      this.items.set(item.id, new InventoryItem(item, stockAvailable));
    }
  }

  find(itemid){
    return this.items.get(itemid);
  }
}

module.exports = Inventory;
