const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', storeController.homePage)
router.get('/stores', storeController.getStores)
router.get('/add', storeController.addStore)
router.post('/add', catchErrors(storeController.createStore))
router.get('/stores/:id/edit', catchErrors(storeController.editStore))

module.exports = router;
