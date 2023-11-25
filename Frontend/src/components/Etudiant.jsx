import React, { Fragment,useEffect,useState } from "react";
import { Button, Modal } from "react-bootstrap";



const Student = () => {
const [users, setUser] = useState([]);
 const [im, setIm] = useState("");
 const [nom, setNom] = useState("");
 const [prenom, setPrenom] = useState("");
 const [naissance, setNaissance] = useState("");
 const [lieu, setLieu] = useState("");
 const [cin, setCin] = useState("");
 const[tel, setTel] =useState("");
 const [adresse, setAdress] = useState(""); 
 const [showModal, setShowModal] = useState(false);
 const handleOpenModal = () => setShowModal(true);
 const handleCloseModal = () => setShowModal(false);
 //ajoutée un données
 const onSubmitFrom = async e => {
  e.preventDefault(); 
 
      try {
     
    const body = { im, nom, prenom, naissance,lieu, cin,tel, adresse};
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
      
      
    });
    //console.log(response);
    window.location = "/";
  } catch (err) {
    console.error(err.message);
  }
}


//delete 
const deleteNote = async(id)=>{
  try {
  const deleteNote = await fetch(`http://localhost:5000/users/${id}`,{
      method: "DELETE"
     
  });
 setUser(users.filter(etudiants =>etudiants.id !==id));
  } catch (err) {
      console.error(err.message)
  }
}
//select donnée
const getNotess = async()=>{
  try {
      const response = await fetch("http://localhost:5000/users");
      const jsonData = await response.json();
      setUser(jsonData);
      //console.log(notes);
  } catch (err) {
      console.error(err.message);
  }
};
useEffect(()=>{
  getNotess();
  
  }, []); 
  return (
    <>
       <Button
      variant="primary"
      onClick={handleOpenModal}
    >
            Ajouter
    </Button>

    

    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>fiche d'inscription</Modal.Title>
      </Modal.Header>      
      <Modal.Body>
        N°IM:<input 
        type="text"         
        className="form-control"
        id="id"
        name="id"
        value={im}
        onChange={e => setIm(e.target.value)} />
        Nom:<input 
        type="text" 
        className="form-control" 
        id="firstName"
        name="firstName"
        value={nom}
        onChange={e => setNom(e.target.value)}/>
        Prénom:<input 
        type="text" 
        className="form-control" 
        id="lastName"
        name="lastName"
        value={prenom}
        onChange={e => setPrenom(e.target.value)}/>
        Né(e):<input
        type="date"
        className="form-control" 
        id="address"
        name="address"
        value={naissance}
        onChange={e => setNaissance(e.target.value)}/>
        Lieu de Naissance:<input
        type="text"
        className="form-control"
        id="photo"
        name="cin"
        value={lieu}
        onChange={e => setLieu(e.target.value)} />
        Cin:<input 
        type="number" 
        className="form-control"
        id="cin"
        name="cin"
        value={cin}
        onChange={e => setCin(e.target.value)}        
        />
        Tél:<input
         type="number" 
         className="form-control"
         id="tel"
         name="tel"
         value={tel}
         onChange={e => setTel(e.target.value)} />
        Adresse:<input 
         type="text" 
         className="form-control" 
         id="address"
         name="address"
         value={adresse}
         onChange={e => setAdress(e.target.value)}
        />
       <form>
      
    </form>      
         
        
        </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="danger" onClick={onSubmitFrom}>
          valider
        </Button>
      </Modal.Footer>
    </Modal>

    <br/><br/><br/><br/>
    <Fragment>
      {""}
    <p>The .table-hover class enables a hover state on table rows:</p>            
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Im</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Né(e)</th>
        <th>Lieu_de_naissance</th>
        <th>Cin</th>
        <th>Tél</th>
        <th>Adresse</th>
      </tr>
    </thead>
    <tbody>
      { users.map(etudiants=>(
      <tr key={etudiants.id}>        
        <td>{etudiants.im}</td>
        <td>{etudiants.nom}</td>
        <td>{etudiants.prenom}</td>
        <td>{etudiants.naissance}</td>
        <td>{etudiants.lieu}</td>
        <td>{etudiants.cin}</td>
        <td>{etudiants.tel}</td>
        <td>{etudiants.adresse}</td> 
        <td><button onClick={() =>deleteNote(etudiants.id)} class="form-control">delete</button></td>
        <td><button class="form-control">Edit</button></td> 
      </tr>
     ))}
      
    </tbody>
  </table>
  
  </Fragment>
  
        
      
    
  </>


  );
  
} 
export default Student;