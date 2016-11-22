let chai = require('chai');
let path = require('path');
let Item = require('../models/Item');


chai.should();

describe('Item', () => {
  it ('can be created with constructor', () => {
    let item = new Item(100);

    item.should.be.an('object');
  })
})
