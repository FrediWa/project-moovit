const Category = require('../models/categorySchema');
const {Status, SUCCESS, FAIL} = require('../../status');

// Delete tag.
async function deleteCategory(id){
    //cascade delete
}

module.exports = {deleteCategory};

