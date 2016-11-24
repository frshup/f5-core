class Unit {
  constructor(symbol, name){
    this._symbol = symbol;
    this._name = name;
  }

  set symbol(value) { this._symbol = value; }
  get symbol() { return this._symbol; }

  set name(value) { this._name = value; }
  get name() { return this._name; }
}

const Number = new Unit(".no", "number");
const Piece = new Unit("pc","piece");
const Packet = new Unit("pkt", "packet");
const Kit = new Unit("kit", "kit");
const Hours = new Unit("hrs", "hours");
const Minutes = new Unit("minutes", "minutes");

module.exports = {Number, Piece, Packet, Kit, Unit};
