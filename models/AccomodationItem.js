const Item = require('./Item');

class AccomodationItem extends Item {
  constructor(id, type){
    super(id);
    this._type = type;
  }
}
