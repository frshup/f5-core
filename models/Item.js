
class Item {
  constructor(id, name, description = "", quantity, unit, price)
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.unit = unit;
    this.price = price;
  }

  getID() { return this.id; }
  getName() { return this.name; }
  getDesc() { return this.description; }
  getQuantity() { return this.quantity; }
  getUnit() { return this.unit; }
  getPrice() { return this.price; }
}

module.exports = Item;
