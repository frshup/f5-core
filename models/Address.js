class Address {
  constructor(houseOrFlatNo, street, locality, city, state, country = "India"){
    this.houseOrFlatNo = houseOrFlatNo;
    this.street = street;
    this.locality = locality;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  getHouseOrFlatNo() {return this.houseOrFlatNo;}
  getStreet() {return this.street;}
  getLocality() {return this.locality;}
  getCity() {return this.city;}
  getState() {return this.state;}
}

module.exports = Address;
