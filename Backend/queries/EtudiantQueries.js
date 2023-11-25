const getEtudiants = "SELECT * FROM etudiants LIMIT $1 OFFSET $2";
const getEtudiantById = "SELECT FROM etudiants WHERE id = $1";
const checkIMExists = "SELECT s FROM etudiants s WHERE s.IM = $1";
const addEtudiant = "INSERT INTO etudiants (im, nom, prenom, date_lieu_naissance, cin, adresse, contact, email, niveau, parcours, sex, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $13)";
const searchEtudiant = 'SELECT * FROM etudiants WHERE im ILIKE $1 OR nom ILIKE $2 OR prenom ILIKE $3 OR date_lieu_naissance ILIKE $4 OR cin::text ILIKE $5 OR adresse ILIKE $6 OR contact::text ILIKE $7 OR email ILIKE $8 OR niveau ILIKE $9 OR parcours ILIKE $10 OR sex ILIKE $11 OR photo ILIKE $12';
const removeEtudiant = "DELETE FROM etudiants WHERE id = $1";
const updateEtudiant = "UPDATE etudiants SET im = $1, nom = $2, prenom = $3, date_lieu_naissance = $4, cin = $5, adresse = $6, contact = $7, email = $8 niveau = $9, parcours = $10, sex = $11, photo = $12 WHERE id = $13";

module.exports = {
    getEtudiants,
    getEtudiantById,
    checkIMExists,
    addEtudiant,
    removeEtudiant,
    updateEtudiant,
    searchEtudiant,
}