const registerLogic = require('./services/register.js');
const loginLogic = require('./services/login.js');
const logoutLogic = require('./services/logout.js');
const userInfoLogic = require('./services/userInfo.js');
const editUserLogic = require('./services/editUser.js');

function registerUser(username, password){
    return registerLogic.registerUser(username, password);
}

async function login(username, password){
    return await loginLogic.loginUser(username, password);
 
}

async function logout(res){
    return await logoutLogic.logoutUser(res);
 
}

function getUserInfo(username, password){

}

async function editUserInfo(userData){
    return await editUserLogic.editUser(userData)
}

module.exports = {
    registerUser,
    login,
    getUserInfo,
    logout,
    editUserInfo
}