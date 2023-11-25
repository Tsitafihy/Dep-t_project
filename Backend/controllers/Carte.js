const pool = require('../config/conn');
const CarteQueries = require('../queries/CarteQueries');
const CarteModel = require('../models/CarteModel');

//Afficher tous  les donnée vient de la table cartes
const getCartes =async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;// Analyser la page comme un entier
        const pageSize = parseInt(req.query.pageSize, 10) || 10;// Analyser pageSize comme un entier

        const offset = (page - 1) * pageSize;

        //Récupérer le nombre total d'enregistrements
        const query = {
            text: 'SELECT COUNT(*) FROM cartes',
          };
          const result = await pool.query(query);
          const totalCount = parseInt(result.rows[0].count);
        
        // Récupérer les données de la page actuelle
        const dataQuery = CarteQueries.getCartes;
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

//Récupérer une donnée vient de la table cartes
const getCarteById = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {  // Checking if parsed value is Not a Number
        return res.status(400).json({ error: "Le paramètre d'identification doit être un nombre!" });
    };

    pool.query(CarteQueries.getCarteById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

//Ajouter une donnée vient de la table cartes
const addCarte = (req, res) => {
    const {numero, date_expiration, annee_universitaire, status} = req.body;

    //check Date_expiration exist
    pool.query(CarteQueries.checkNumeroExists, [numero], (error, results) => {
        if (results.rows.length){
            res.send("Numéro déjà enregistré!");
        }else{
            //Add carte to database
            pool.query(CarteQueries.addCarte, [numero, date_expiration, annee_universitaire, status], (error, results) =>{
            if (error) throw error
            res.status(201).send("Erengistremment avec succès!");
        });
        }
    });
};

//Rechercher une donnée vient de la table cartes
const searchCarte = async (req, res) => {
    const q = req.params.q; // Change req.query.q to req.params.q if you are using route parameters

    try {
      const result = await pool.query(CarteQueries.searchCarte, [`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`]);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Il y a une erreur.' });
    }
  };

//Recherche entre deux valeur 
const searchCarteTow = async (req, res) => {
    const { annee_universitaire, status } = req.params;

    if (!annee_universitaire || !status) {
        return res.status(400).json({ error: "L'année_universitaire et le statut sont requis" });
    }

    try {
        const result = await pool.query(CarteQueries.searchCarteTow, [`%${annee_universitaire}%`,`%${status}%`]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Faux recherche!');
    }
};  


//Supprimer une donnée vient de la table cartes
const removeCarte = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(CarteQueries.getCarteById, [id], (error, results) => {
        const noCarteFound = !results.rows.length;
        if(noCarteFound) {
            res.send("Carte n'existe pas dans le base de donnée!");
        }

        pool.query(CarteQueries.removeCarte, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Suppréssion avec succès!");
        });
    });
};

//Modifier une donnée vient de la table cartes
const updateCarte = (req, res) => {
    const id = parseInt(req.params.id);
    const {numero, date_expiration, annee_universitaire, status} = req.body;

    pool.query(CarteQueries.getCarteById, [id], (error, results) => {
        const noCarteFound = !results.rows.length;
        if(noCarteFound) {
            res.send("Carte n'existe pas dans le base de donnée!");
        };

        pool.query(CarteQueries.updateCarte, [numero, date_expiration, annee_universitaire, status, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Modification avec succès!");
        });
    });
};
module.exports = {
    getCartes,
    getCarteById,
    addCarte,
    removeCarte,
    updateCarte,
    searchCarte,
    searchCarteTow
}