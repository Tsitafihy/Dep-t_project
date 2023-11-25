const pool = require('../config/conn');

class EtudiantModel {
    constructor(row) {
        this.row = row;
    }

    get id() {
        return this.row.id;
    }

    get im() {
        return this.row.im;
    }

    get nom() {
        return this.row.nom;
    }

    get prenom() {
        return this.row.prenom;
    }

    get date_lieu_naissance() {
        return this.row.date_lieu_naissance;
    }

    get cin() {
        return this.row.cin;
    }

    get adresse() {
        return this.row.adresse;
    }

    get contact() {
        return this.row.contact;
    }

    get email() {
        return this.row.email;
    }

    get niveau() {
        return this.row.niveau;
    }

    get parcours() {
        return this.row.parcours;
    }

    get sex() {
        return this.row.sex;
    }

    get photo() {
        return this.row.photo;
    }
}

module.exports = EtudiantModel;