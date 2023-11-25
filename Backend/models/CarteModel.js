const pool = require('../config/conn');

class CarteModel {
    constructor(row) {
        this.row = row;
    }

    get id() {
        return this.row.id;
    }

    get numero() {
        return this.row.numero;
    }

    get date_expiration() {
        return this.row.date_expiration;
    }

    get annee_universitaire() {
        return this.row.annee_universitaire;
    }

    get status() {
        return this.row.status;
    }
}

module.exports= CarteModel;