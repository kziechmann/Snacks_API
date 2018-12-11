var express = require('express')
var router = express.Router();
var knex = require('../knex')
var controller = require('../controllers/snacks.js')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.post)
router.delete('/:id', controller.delOne)

module.exports = router;
