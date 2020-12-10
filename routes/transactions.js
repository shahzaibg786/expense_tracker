//now here we need express so we will put express here
const express = require('express');
const router = express.Router();
// destructureing, so we call out get transaction and we want to get from controller 

const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

//in order to use above code we will do bellow
// now instead of saying router.get we will say router.route 
router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);


//now we can say router.what ever methode is 
//router.get('/',(req,res) => res.send('Hello Shahzaib'));


//now we have to export router in order to access it so we say module.exports = router
module.exports = router;