const UserDao = require('./userDAO');
const userDao = new UserDao();

const cadastrar = async (users) => {
    return await userDao.insert(users);
}

const listar = async () => {
    return (await userDao.get()).rows;  
}

const deletar = async (users) => {
    return await userDao.delete(users);
}

const atualizar = async (users) => {   
    return await userDao.put(users);   
}



module.exports = {cadastrar, listar, deletar, atualizar};