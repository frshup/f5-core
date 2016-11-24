let chai = require('chai');
let path = require('path');
let Money = require('js-money');
let Item = require('../models/Item');
let Quantity = require('../models/Quantity');
let Unit = require('../models/Unit');


chai.should();

describe('Item', () => {
  it ('can be created with constructor', () => {
    let item = new Item();

    item.should.be.an('object');
  });

  it ('can create an item of chip packet', () =>{
    let item = new Item();

    item.id = '101';
    item.name = 'Lay Chips';
    item.quantity = new Quantity(1, Unit.Packet);

    item.name.should.equal('Lay Chips');
    item.quantity.toString().should.equal('1 packet');
  });

  it ('can create an item of tooth paste with name, desc, id attributes', () =>{
    let item = new Item();

    item.id = '102';
    item.name = 'Colgate Toothpaste';
    item.desc = 'Colgate Toothpaste (100 mg)';
    item.quantity = new Quantity(1, Unit.Packet);

    item.id.should.equal('102');
    item.name.should.equal('Colgate Toothpaste');
    item.desc.should.equal("Colgate Toothpaste (100 mg)");
    item.quantity.toString().should.equal('1 packet');
  });

  it ('can create an item of tooth brush with name, desc, id, price attributes', () =>{
    let item = new Item();

    item.id = '103';
    item.name = 'Colgate Toothbrush';
    item.desc = 'Colgate Toothbrush (soft)';
    item.quantity = new Quantity(1, Unit.Number);
    item.price = new Money(15, Money.INR);

    item.id.should.equal('103');
    item.name.should.equal('Colgate Toothbrush');
    item.desc.should.equal("Colgate Toothbrush (soft)");
    item.quantity.toString().should.equal('1 number');

    item.price.getAmount().should.equal(15);
    item.price.getCurrency().should.equal("INR");
  });

})
