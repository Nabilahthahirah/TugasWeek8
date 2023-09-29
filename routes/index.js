const express = require('express');
const router = express.Router();
const actorRouter = require('./film.js')
const categoryRouter = require('./category.js')

router.use("/film", actorRouter);
router.use("/category", categoryRouter)

module.exports = router;