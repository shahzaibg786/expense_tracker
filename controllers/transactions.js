/**we will have all the methodes that will use the models to 
 * interact with database so we have not created model yet. my goal is to get 
 * methodes and get our routes setup. In order to do this we want to export functions like transactions
 * and here is arrow function that is going to take request, response and next as parameters
 * */
// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
 exports.getTransactions =(req, res, next) => {
     res.send('GET transactions');
 }

// @desc Add all transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction =(req, res, next) => {
    res.send('POST transaction');
}
// @desc Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction =(req, res, next) => {
    res.send('DELETE transaction');
}