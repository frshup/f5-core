let chai = require('chai');
let path = require('path');
let Quantity = require('../models/Quantity');
let Unit = require('../models/Unit');


chai.should();

describe('Quantity', () => {
  it ('create 1 packet ', () => {
    let quantity = new Quantity(1, Unit.Packet);

    quantity.should.be.an('object');
  });

  it ('create 2 packets ', () => {
    let quantity = new Quantity(2, Unit.Packet);

    quantity.should.be.an('object');
  })
})
