const express = require("express")
const carteRoutes = require("./routes/CarteRoute.js");
const etudiantRoutes = require("./routes/EtudiantRoute.js");
const inscriptionRoutes = require("./routes/InscriptionRoute.js");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");

})

app.use('/api/v1/cartes', carteRoutes);
app.use('/api/v2/etudiants', etudiantRoutes);
app.use('/api/v3/inscriptions', inscriptionRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));