const { Router } = require("express");
// const {dbCombined} = require('../../DB/dbCombined');
//const {dbApi , uploadTemperamentToPosgres, dbTemperamentsList} = require('../../DB/dbApi');
const { Temperament } = require("../../db");
const router = Router();
const { uploadTemperamentToPosgres } = require("../../DB/dbApi");

// With this middleware charge to the DB Posgres the temperaments data
router.use(async (req, res, next) => {
  const condicion = await Temperament.findByPk(130);
  if (condicion === null) {
    await uploadTemperamentToPosgres();
  }
  next();
});

router.get("/", async (req, res) => {
  try {
    let temperament = await Temperament.findAll({
      attributes: ["id", "name"],
    });
    res.status(200).json(temperament);
  } catch (error) {
    res.status(400).send("A error has presented in the DB API");
  }
});

module.exports = router;
