const BancoDao = require('./bancoDao');
const bancoDao = new BancoDao();


const adicionar = async (dados) => {
    return await bancoDao.insert(dados);
}

const apagar = async (dados) => {
    return await bancoDao.delete(dados);  
}

const editar = async (dados) => {   
    return await bancoDao.put(dados);   
}

const selecionar = async () => {
    return (await bancoDao.get()).rows;  
}




module.exports = {adicionar, apagar, editar, selecionar};