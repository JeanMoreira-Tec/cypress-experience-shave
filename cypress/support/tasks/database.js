const { Pool } = require('pg')

const dbConfig = {
    host: 'isilo.db.elephantsql.com',
    user: 'shhpbkhz',
    password: 'Nko89k5uNbxfjXDqsjvjCMlVEn0iSCLH',
    database: 'shhpbkhz',
    port: 5432
}

module.exports = {
    removeUser(email) {
        return new Promise(function (resolve) {
            const pool = new Pool(dbConfig)

            pool.query('DELETE FROM users WHERE email = $1', [email], function (error, result) {
                if (error) {
                    throw error
                }
                resolve({ success: result })
            })
        })
    }
}