const db = require('../config/db.config')

class AbstractModel {
    constructor({ table }) {
        this.table = table;
        this.database = db;
    }

    findAll = async () => await this.database.query(`SELECT * FROM ${this.table}`)

    findById = async (id) => await this.database.query(`SELECT * FROM ${this.table} WHERE id= ?`, [id])

}

module.exports = AbstractModel