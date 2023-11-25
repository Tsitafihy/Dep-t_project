const pool = require('../config/conn');
const EtudiantQueries = require('../queries/EtudiantQueries');
const EtudiantModel = require('../models/CarteModel');

// //Afficher tous  les donnée vient de la table etudiants
const getEtudiants =async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;// Analyser la page comme un entier
        const pageSize = parseInt(req.query.pageSize, 10) || 10;// Analyser pageSize comme un entier

        const offset = (page - 1) * pageSize;

        //Récupérer le nombre total d'enregistrements
        const query = {
            text: 'SELECT COUNT(*) FROM etudiants',
          };
      
          const result = await pool.query(query);
          const totalCount = parseInt(result.rows[0].count);
        
        // Récupérer les données de la page actuelle
        const dataQuery = EtudiantQueries.getEtudiants;
        const { rows } = await pool.query(dataQuery, [pageSize, offset]);

        res.status(200).json({
        total: totalCount,
        currentPage: page,
        pageSize,
        data: rows,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

//Récupérer une donnée vient de la table etudiants
const getEtudiantById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(EtudiantQueries.getEtudiantById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

//Ajouter une donnée vient de la table etudiants
const addEtudiant = (req, res) => {
    const {im, nom, prenom, date_lieu_naissance, cin, adresse, contact, email, niveau, parcours, sex, photo} = req.body;

    //check IM exist
    pool.query(EtudiantQueries.checkIMExists, [im], (error, results) => {
        if (results.rows.length){
            res.send("IM déjà enregistrée!");
        }else{
            //Add etudiant to database
            pool.query(EtudiantQueries.addEtudiant, [im, nom, prenom, date_lieu_naissance, cin, adresse, contact, email, niveau, parcours, sex, photo], (error, results) =>{
            if (error) throw error
            res.status(201).send("Etudiant créer avec succès!");
        });
        }
    });
};

//Rechercher une donnée vient de la table cartes
const searchEtudiant = async (req, res) => {
    const q = req.params.q; // Change req.query.q to req.params.q if you are using route parameters

    try {
      const result = await pool.query(EtudiantQueries.searchEtudiant, [`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`]);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Il y a une erreur.' });
    }
  };
  
//Supprimer une donnée vient de la table etudiants
const removeEtudiant = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(EtudiantQueries.getEtudiantById, [id], (error, results) => {
        const noEtudiantFound = !results.rows.length;
        if(noEtudiantFound) {
            res.send("Etudiant n'existe pas dans la base de donnée!");
        }

        pool.query(EtudiantQueries.removeEtudiant, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Suppréssion étudiant avec succès!");
        });
    });
};

//Modifier une donnée vient de la table etudiants
const updateEtudiant = (req, res) => {
    const id = parseInt(req.params.id);
    const {im, nom, prenom, date_lieu_naissance, cin, adresse, contact, email, niveau, parcours, sex, photo} = req.body;

    pool.query(EtudiantQueries.getEtudiantById, [id], (error, results) => {
        const noEtudiantFound = !results.rows.length;
        if(noEtudiantFound) {
            res.send("Etudiant n'existe pas dans la base de donnée!");
        };

        pool.query(EtudiantQueries.updateEtudiant, [im, nom, prenom, date_lieu_naissance, cin, adresse, contact, email, niveau, parcours, sex, photo, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Modification étudiant avec succès!");
        })
    });
};
module.exports = {
    getEtudiants,
    getEtudiantById,
    addEtudiant,
    removeEtudiant,
    updateEtudiant,
    searchEtudiant,
}