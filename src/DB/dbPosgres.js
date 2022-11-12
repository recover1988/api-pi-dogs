const { Dog, Temperament } = require("../db");
/*
OBTENGO DATO DE MI BASE DE DATOS LOCAL EN POSGRES
*/
module.exports = {
  dbPosgres: async () => {
    try {
      let dogsFromPosgres = await Dog.findAll({
        include: Temperament,
      });

      let dogsFromPos = dogsFromPosgres.map((dog) => {
        return {
          id: dog.id,
          name: dog.name,
          image: dog.image,
          temperament: dog.temperaments.map((t) => t.name.toLowerCase()),
          weight_min: dog.weight_min,
          weight_max: dog.weight_max,
          height_min: dog.height_min,
          height_max: dog.height_max,
          life_span_min: dog.life_span_min,
          life_span_max: dog.life_span_max,
          userCreate: true,
        };
      });

      return dogsFromPos;
    } catch (err) {
      throw new Error("Data was not obtained from DB Posgres");
    }
  },
};
