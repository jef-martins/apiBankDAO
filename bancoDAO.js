const {
    Pool,
    Client
} = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "operacoesBancarias",
    password: "root",
    port: 5432,
    max: 10,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })

const client = new Client();



class BancoDao {
    async get() {

        const client = await pool.connect()
        try{
            return pool
                .query(`SELECT * FROM transferencias`)
            }
            catch(err){
                
            }
            finally{
                client.release()
            }
            
    }

    async insert([dados]) {

        const client = await pool.connect()
        try{
            return pool
            .query(
                `INSERT INTO transferencias (
        tipo, 
        conta, 
        agencia, 
        saldo, 
        doc, 
        descricao, 
        data
        ) VALUES (
        ${dados.tipo}, 
        ${dados.conta}, 
        ${dados.agencia}, 
        ${dados.saldo}, 
        ${dados.doc}, 
        '${dados.descricao}', 
        '${dados.data}'
        );
        `
            )
            }
            catch(err){
                
            }
            finally{
                client.release()
            }
        
    }

    async delete(dados) {

        const client = await pool.connect()
        try{
            return pool
            .query(
                `
        DELETE FROM transferencias WHERE id = ${dados.id}`
            )
            }
            catch(err){
                
            }
            finally{
                client.release()
            }
    }

    async put(dados) {
        console.log(dados)
        console.log('e aqui?')
        
        const client = await pool.connect()
        try{
            return pool
            .query(
                `
        UPDATE transferencias SET 
            tipo = ${dados.tipo}, 
            conta = ${dados.conta}, 
            agencia = ${dados.agencia}, 
            saldo = ${dados.saldo}, 
            doc = ${dados.doc}, 
            descricao = '${dados.descricao}', 
            data = '${dados.data}' 
        WHERE id = ${dados.id}`
            )
            }
            catch(err){
                
            }
            finally{
                client.release()
            }
    }

    
}

module.exports = BancoDao;
