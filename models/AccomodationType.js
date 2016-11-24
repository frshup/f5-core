const Quantity = require('./Quantity');
const Unit = require('./Unit');

const Bunker = {
                  name:"Bunker",
                  duration:{
                        min:new Quantity(4, Unit.Hours),
                        max:new Quantity(6, Unit.Hours)
                  }
              };
const Bed = {
                name:"Bed",
                duration:{
                          min:new Quantity(2, Unit.Hours),
                          max:new Quantity(6, Unit.Hours)
                }
            };
const Recliner = {
                  name:"Recliner",
                  duration:{min:new Quantity(2, Unit.Hours),
                          max:new Quantity(6, Unit.Hours)}
                  };
const Sofa = {
                  name:"Sofa",
                  duration:{min:new Quantity(2, Unit.Hours),
                          max:new Quantity(4, Unit.Hours)}
             };

module.exports = {Bunker : Bunker, Bed : Bed, Recliner : Recliner, Sofa : Sofa};
