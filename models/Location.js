class Location {
    constructor(id, name, address, latlng){
      this.id = id;
      this.name = name;
      this.address = address;
      this.latlng = latlng;
    }

    getID() { return this.id; }
    getName() { return this.name; }
    getAddress() { return this.address; }
    getLatlng() { return this.latlng; }
}

module.exports = Location;
