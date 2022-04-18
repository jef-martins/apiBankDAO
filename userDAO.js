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



class UserDao {
    async get() {
        const client = await pool.connect()
        try{
            return pool
                .query(`SELECT * FROM users`)
            }
            catch(err){
                
            }
            finally{
                client.release()
            }
            
    }

    async insert([users]) {
        console.log(users)
        const client = await pool.connect()
        try{
            return pool
            .query(
                `
            INSERT INTO users (
        login,
        senha,
        nome_usuario
            ) VALUES (
        '${users.login}', 
        '${users.senha}', 
        '${users.nome_usuario}'
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

    async delete(users) {
        const client = await pool.connect()
        try{
            return pool
            .query(
                    `
                DELETE FROM users 
                WHERE id = ${users.id}
                    `
                )  
            }
            catch(err){
                
            }
            finally{
                client.release()
            }
    }

    async put([users]) {
        
        const client = await pool.connect()
        console.log(users)
        try{
            return pool
            .query(
                `
                    UPDATE users
                    SET 
                        login = '${users.login}',
                        senha = '${users.senha}',
                        nome_usuario = '${users.nome_usuario}' 
                    WHERE
                        id = ${users.id}
                `
            )
        }
            catch(err){
                
            }
            finally{
                client.release()
            }
    }

}



module.exports = UserDao;
