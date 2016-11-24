let chai = require('chai');
let path = require('path');
let Money = require('js-money');
let Item = require('../models/Item');
let Quantity = require('../models/Quantity');
let Unit = require('../models/Unit');
let Inventory = require('../models/Inventory');


chai.should();

describe('Inventory', () => {
  let inventory = null;

  function paste(id, quantity, price){
    let item = new Item();

    item.id = id;
    item.name = 'Colgate Toothpaste';
    item.desc = 'Colgate Toothpaste (100 mg)';
    item.quantity = quantity;
    item.price = price;

    return item;
  }

  function stockInventory() {
    inventory = new Inventory();

    inventory.add(paste('TP-CLG-101', new Quantity(1, Unit.Packet), new Money(100, Money.INR)), 10);
  }

  beforeEach(() => {
    stockInventory();
  });

  it('can find item by id', () => {
    let inventoryItem = inventory.find('TP-CLG-101');

    inventoryItem.should.be.an('object');
    inventoryItem.item.id.should.equal('TP-CLG-101');
    inventoryItem.item.name.should.equal('Colgate Toothpaste');
    inventoryItem.item.desc.should.equal('Colgate Toothpaste (100 mg)');
    inventoryItem.item.quantity.toString().should.equal('1 packet');

    inventoryItem.stockAvailable.toString().should.equal('10 packet');

    inventoryItem.stockWorth.getAmount().should.equal(1000);
    inventoryItem.stockWorth.getCurrency().should.equal("INR");
  });

  it('should add to existing stock if the same item is added again', () => {
      let item = paste('TP-CLG-101', new Quantity(1, Unit.Packet), new Money(100, Money.INR));

      inventory.add(item, 10);

      inventoryItem = inventory.find('TP-CLG-101');

      inventoryItem.item.id.should.equal('TP-CLG-101');
      inventoryItem.item.name.should.equal('Colgate Toothpaste');
      inventoryItem.item.desc.should.equal('Colgate Toothpaste (100 mg)');
      inventoryItem.item.quantity.toString().should.equal('1 packet');

      inventoryItem.stockAvailable.toString().should.equal('20 packet');

      inventoryItem.stockWorth.getAmount().should.equal(2000);
      inventoryItem.stockWorth.getCurrency().should.equal("INR");
  });
});
