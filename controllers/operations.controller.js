const conecctionSql = require('../configs/db.config');

const getAllOperations = async(req, res) => {
    await conecctionSql.query('SELECT * FROM operations LIMIT 10', (error, operations) => {
        if (error) {
            return res.status(500).send({ message: "There are no operations" });
        } else {
            return res.status(200).send(operations);
        }
    });
}

const getAllOperationsType = async(req, res) => {
    await conecctionSql.query('SELECT * FROM operationType', (error, operations) => {
        if (error) {
            return res.status(500).send({ message: "There are no operations" });
        } else {
            return res.status(200).send(operations);
        }
    });
}

const getOneOperation = async(req, res) => {
    let id = req.params.id;
    await conecctionSql.query('SELECT * FROM operations WHERE id = ?', [id], (error, operation) => {
        if (error) {
            return res.status(500).send({ message: "The operation doesn't exist" });
        } else {
            return res.status(200).send(operation);
        }
    });
}

const createOperation = async(req, res) => {
    await conecctionSql.query('INSERT INTO operations set ?', [req.body], (error, operation) => {
        if (error) {
            return res.status(500).send({ message: "Error creating operation" });
        } else {
            return res.status(200).send({ message: "The operation was saved successfully" });
        }
    });
}

const updateOperation = async(req, res) => {
    let id = req.params.id;
    await conecctionSql.query('UPDATE operations SET ? WHERE id = ?', [req.body, id], (error, operation) => {
        if (error) {
            return res.status(500).send({ message: "Error modifying operation" });
        } else {
            return res.status(200).send({ message: "The operation was updated successfully" });
        }
    });
}

const deleteOperation = async(req, res) => {
    let id = req.params.id;
    await conecctionSql.query('SELECT id FROM operations WHERE id= ?;', [id], (error, operation) => {
        if (operation.length == 0) {
            return res.status(500).send({ message: 'The operation you want to delete was not found' });
        } else {
            conecctionSql.query('DELETE FROM operations WHERE id= ?', [id], (error, operation) => {
                return res.status(200).send({ message: "The operation was removede successfully" });
            });
        }
    });
}

module.exports = {
    getAllOperations,
    getAllOperationsType,
    getOneOperation,
    createOperation,
    updateOperation,
    deleteOperation
}