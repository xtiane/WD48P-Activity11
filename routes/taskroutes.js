const express = require('express');
const router = express.Router();

const {
    Create,
    Delete,
    Save,
} = require('../controllers/taskcontrollers')

router.route('/create').post(Create);
router.route('/:id').put(Save).delete(Delete);
   
module.exports = router