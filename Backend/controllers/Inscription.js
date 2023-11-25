const pool = require('../config/conn');
const InscriptionQueries = require('../queries/InscriptionQueries');
const InscriptionModel = require('../models/InscriptionModel');

//Afficher tous  les donnée vient de la table inscriptions
const getInscriptions =async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;// Analyser la page comme un entier
        const pageSize = parseInt(req.query.pageSize, 10) || 10;// Analyser pageSize comme un entier

        const offset = (page - 1) * pageSize;

        //Récupérer le nombre total d'enregistrements
        const query = {
            text: 'SELECT COUNT(*) FROM inscriptions',
          };
      
          const result = await pool.query(query);
          const totalCount = parseInt(result.rows[0].count);
        
        // Récupérer les données de la page actuelle
        const dataQuery = InscriptionQueries.getInscriptions;
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


//Récupérer une donnée vient de la table inscriptions
const getInscriptionById = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {  // Checking if parsed value is Not a Number
        return res.status(400).json({ error: "Id param must be a number!" });
    };
    pool.query(InscriptionQueries.getInscriptionById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

//Ajouter une donnée vient de la table inscriptions
const addInscription = (req, res) => {
    const {n_bordereau, montant, etat_payement, date} = req.body;

    //check N°Bordereau exist
    pool.query(InscriptionQueries.checkN_bordereauExists, [n_bordereau], (error, results) => {
        if (results.rows.length){
            res.send("N°bordereau déjà enregistrée!");
        }else{
            //Add Inscription to database
            pool.query(InscriptionQueries.addInscription, [n_bordereau, montant, etat_payement, date], (error, results) =>{
            if (error) throw error
            res.status(201).send("Inscription avec succès!");
        });
        }
    });
};

//Rechercher une donnée vient de la table inscriptions
const searchInscription = async (req, res) => {
    const q = req.params.q; // Change req.query.q to req.params.q if you are using route parameters
    
    try {
      const result = await pool.query(InscriptionQueries.searchInscription, [`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`]);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Il y a une erreur.' });
    }
  };

//Recherche entre deux valeur 
// const searchInscriptionTow = async (req, res) => {
//     const { etat_payement, date } = req.params;
//     if (!etat_payement || !date) {
//         return res.status(400).json({ error: 'Both etat_payement and date are required' });
//     }
//     console.log(date);
//     try {
//         //const annee_universitaireInt = parseInt(annee_universitaire, 20);
//         //const statusInt = parseInt(status, 20);
//         const result = await pool.query(InscriptionQueries.searchInscriptionTow, [`%${etat_payement}%`, `%${date}%`]);
//         res.json(result.rows);
//     } catch (error) {
//         console.error('Error executing query:', error);
//         res.status(500).send('Faux recherche!');
//     }
// };    

//Supprimer une donnée vient de la table inscriptions
const removeInscription = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(InscriptionQueries.getInscriptionById, [id], (error, results) => {
        const noInscriptionFound = !results.rows.length;
        if(noInscriptionFound) {
            res.send("Inscription n'existe pas dans la base de donnée!");
        }

        pool.query(InscriptionQueries.removeInscription, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Suppréssion inscription avec succès!");
        });
    });
};

//Modifier une donnée vient de la table inscriptions
const updateInscription = (req, res) => {
    const id = parseInt(req.params.id);
    const {n_bordereau, montant, etat_payement, date} = req.body;

    pool.query(InscriptionQueries.getInscriptionById, [id], (error, results) => {
        const noInscriptionFound = !results.rows.length;
        if(noInscriptionFound) {
            res.send("Inscription n'existe pas dans la base de donnée!");
        };

        pool.query(InscriptionQueries.updateInscription, [n_bordereau, montant, etat_payement, date, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Modification inscription avec succès!");
        })
    });
};
module.exports = {
    getInscriptions,
    getInscriptionById,
    addInscription,
    removeInscription,
    updateInscription,
    searchInscription,
    // searchInscriptionTow,
}