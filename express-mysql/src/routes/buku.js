const express = require('express');

const BukuController = require('../controller/buku.js');

const router = express.Router();

//CREATE -POST
router.post('/',BukuController.createNewBuku);

//READ -GET
router.get('/', BukuController.getAllBuku);

//UPDATE -PATCh
router.patch('/:id', BukuController.updateBuku);

//DELETE -DELETE
router.delete('/:id', BukuController.deleteBuku);

//read
router.get('/:id', BukuController.readBuku);

module.exports = router;