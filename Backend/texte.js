const express = require("express");
const app = express();
const cors = require("cors");
const multer = require('multer')

app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/Images"); // Chemin relatif au répertoire du projet
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.json({ message: "Fichier téléchargé avec succès" });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
