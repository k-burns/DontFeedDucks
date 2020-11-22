const router = require('express').Router()
const {Snack} = require('../db/models')
module.exports = router

// GET /api/cart/user/userId
router.get('/', async (req, res, next) => {
  try {
    const snacks = await Snack.findAll()
    res.json(snacks)
  } catch (err) {
    next(err)
  }
})
