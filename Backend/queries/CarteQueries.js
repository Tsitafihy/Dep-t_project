const getCartes = 'SELECT * FROM cartes LIMIT $1 OFFSET $2';
const getCarteById = 'SELECT * FROM cartes WHERE id = $1';
const checkNumeroExists = 'SELECT s FROM cartes s WHERE s.numero = $1';
const addCarte = 'INSERT INTO cartes (numero, date_expiration, annee_universitaire, status) VALUES ($1, $2, $3, $4)';
const searchCarte = 'SELECT * FROM cartes WHERE numero::text ILIKE $1 OR date_expiration::text ILIKE $2 OR annee_universitaire ILIKE $3 OR status ILIKE $4';
const searchCarteTow = 'SELECT * FROM cartes WHERE annee_universitaire ILIKE $1::text AND status ILIKE $2::text';
const removeCarte = 'DELETE FROM cartes WHERE id = $1';
const updateCarte = 'UPDATE cartes SET numero = $1, date_expiration = $2, annee_universitaire = $3, status = $4 WHERE id = $5';

module.exports = {
    getCartes,
    getCarteById,
    checkNumeroExists,
    addCarte,
    removeCarte,
    updateCarte,
    searchCarte,
    searchCarteTow,
}
// const searchCarteTow = 'SELECT * FROM cartes WHERE annee_universitaire ILIKE $1::text AND status ILIKE $2::text';