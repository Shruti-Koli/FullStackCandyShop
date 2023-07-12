const express = require('express');
const adminC = require('../controllers/adminC');

const router = express.Router();

router.get('/get-candies',adminC.getCandies);
router.post('/add-candy',adminC.addCandy);
router.get('/buy-candy/:id',adminC.buyCandy);
router.get('/get-candy/:id',adminC.getCandy);


module.exports = router;