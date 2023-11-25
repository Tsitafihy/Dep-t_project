const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./config/conn');

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

// insertion des données étudiants
app.post("/users", async (req, res) => {
  try {
    const { im, nom, prenom, naissance, lieu, cin, tel, adresse } = req.body;
    const newUsers = await pool.query(
      "INSERT INTO etudiants(im, nom, prenom, naissance, lieu, cin, tel, adresse) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
      [im, nom, prenom, naissance, lieu, cin, tel, adresse]
    );
    res.json(newUsers.rows);

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//selection les données edutiants
app.get("/users", async(req,res)=>{
    try {
        const allwort= await pool.query("SELECT * FROM etudiants");
        res.json(allwort.rows);
       
         } catch (err) {
        console.error(err.message);
        
    }
});

// insertion inscrtiopn et cartes
app.post("/useres", async (req, res) => {
  try {
    const { im, niveau, parcours, annee_universitaire, montant, numero_baurderau, statu } = req.body;

    // Insérer dans la table inscriptions
    const newInscription = await pool.query(
      "INSERT INTO inscriptions(im, niveau, parcours, annee_universitaire, montant, numero_baurderau) VALUES($1, $2, $3, $4, $5, $6 )",
      [im, niveau, parcours, annee_universitaire, montant, numero_baurderau]
    );

    // Insérer dans la table cartes
    const newCarte = await pool.query(
      
      "INSERT INTO cartes(im, annee_universitaire,statu) VALUES($1, $2,$3)",
      [im, annee_universitaire, statu]
    );

    res.json({ inscription: newInscription.rows, carte: newCarte.rows });

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// recherche par Id
// Serveur Express (app.js)
app.get("/users/search", async (req, res) => {
  try {
    const { im, niveau } = req.query;

    if (im && niveau) {
      // Recherche par ID et niveau
      const user = await pool.query("SELECT * FROM inscriptions WHERE annee_universitaire = $1 AND niveau = $2", [im, niveau]);
      res.json(user.rows);
    } else if (im) {
      // Recherche par ID uniquement
      const user = await pool.query("SELECT * FROM inscriptions WHERE annee_universitaire = $1", [im]);
      res.json(user.rows);
    } else if (niveau) {
      // Recherche par niveau uniquement
      const users = await pool.query("SELECT * FROM inscriptions WHERE niveau = $1", [niveau]);
      res.json(users.rows);
    } else {
      res.status(400).json({ error: 'Bad Request' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// ... (your other routes)
//select inscriptions
app.get("/useres", async(req,res)=>{
    try {
        const allwort= await pool.query("SELECT * FROM inscriptions");
        res.json(allwort.rows);
       
         } catch (err) {
        console.error(err.message);
        
    }
});
//select cartes
app.get("/usereis", async(req,res)=>{
    try {
        const allwort= await pool.query("SELECT * FROM cartes");
        res.json(allwort.rows);
       
         } catch (err) {
        console.error(err.message);
        
    }
});

/* modification par Id
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { im, nom, prenom, date_lieu_naissance, cin, adresse, contact } = req.body;
    const updateUser = await pool.query("UPDATE etudiants SET im =$1, nom=$2, prenom=$3, date_lieu_naissance=$4, cin=$5, adresse=$6, contact=$7 WHERE id = $8",
      [im, nom, prenom, date_lieu_naissance, cin, adresse, contact, id]);
    res.json("modifications");

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}); */

// suppression la donnée dans le table etudiants
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM etudiants WHERE id =$1", [id])
    res.json("delete");

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// sélection de calcul le nombre total dans le carte
app.get("/users/count", async (req, res) => {
  try {
    const allwort = await pool.query("SELECT COUNT(*) FROM cartes");
    const studentCount = parseInt(allwort.rows[0].count);
   res.json({ count: studentCount });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// compte le nombre d'invalide et valide
app.get("/status/count", async (req, res) => {
  try {
    const validStatusCount = await pool.query("SELECT COUNT(*) FROM cartes WHERE statu = 'Valide'");
    const invalidStatusCount = await pool.query("SELECT COUNT(*) FROM cartes WHERE statu = 'Invalide'");

    const validCount = parseInt(validStatusCount.rows[0].count);
    const invalidCount = parseInt(invalidStatusCount.rows[0].count);
       res.json({ validCount, invalidCount });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

