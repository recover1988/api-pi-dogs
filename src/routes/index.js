const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require("./route/dogs");
const temperaments = require("./route/temperaments");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogs);

router.use("/temperaments", temperaments);

module.exports = router;
