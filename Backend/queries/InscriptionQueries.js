const getInscriptions = "SELECT * FROM inscriptions LIMIT $1 OFFSET $2";
const getInscriptionById = 'SELECT * FROM inscriptions WHERE id = $1';
const checkN_bordereauExists = "SELECT s FROM inscriptions s WHERE s.n_bordereau = $1";
const addInscription = 'INSERT INTO inscriptions (n_bordereau, montant, etat_payement, date) VALUES ($1, $2, $3, $4)';
const searchInscription = 'SELECT * FROM inscriptions WHERE n_bordereau::text ILIKE $1 OR montant::text ILIKE $2 OR etat_payement ILIKE $3 OR date::text ILIKE $4';
// const searchInscriptionTow = 'SELECT * FROM inscriptions WHERE etat_payement LIKE $1 AND date LIKE $2::text';
const removeInscription= "DELETE FROM inscriptions WHERE id = $1";
const updateInscription = "UPDATE inscriptions SET n_bordereau = $1, montant = $2, etat_payement = $3, date = $4 WHERE id = $5";

module.exports = {
    getInscriptions,
    getInscriptionById,
    checkN_bordereauExists,
    addInscription,
    removeInscription,
    updateInscription,
    searchInscription,
    // searchInscriptionTow,
}
// const searchCarteTow = 'SELECT * FROM inscriptions WHERE etat_payement ILIKE $1::text AND date ILIKE $2::text';