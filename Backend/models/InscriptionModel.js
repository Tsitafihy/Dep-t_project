const pool = require('../config/conn');

class InscriptionModel {
    constructor(row) {
        this.row = row;
    }

    get id() {
        return this.row.id;
    }

    get n_bordereau() {
        return this.row.n_bordereau;
    }

    get montant() {
        return this.row.montant;
    }

    get etat_payement() {
        return this.row.etat_payement;
    }

    get date() {
        return this.row.date;
    }
}
module.exports = InscriptionModel;