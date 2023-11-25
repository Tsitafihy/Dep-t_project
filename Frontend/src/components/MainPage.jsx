import React, { useEffect, useState } from 'react';

const MainPage = () => {

    
  const [studentCount, setStudentCount] = useState(0);
  const [usereis, setUsereis] = useState([]);

  const [validStatusCount, setValidStatusCount] = useState(0);
  const [invalidStatusCount, setInvalidStatusCount] = useState(0);

  const getStatusCounts = async () => {
    try {
      const response = await fetch("http://localhost:5000/status/count");
      const jsonData = await response.json();
      console.log('Data from server:', jsonData);
      setValidStatusCount(jsonData.validCount);
      setInvalidStatusCount(jsonData.invalidCount);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStatusCounts();
  }, []);
// compte total 
  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/users/count"); // Updated URL
      const jsonData = await response.json();
      console.log('Data from server:', jsonData);
      setStudentCount(jsonData.count);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  //select donnée
const getNotess = async()=>{
    try {
        const response = await fetch("http://localhost:5000/usereis");
        const jsonData = await response.json();
        setUsereis(jsonData);
        //console.log(notes);
    } catch (err) {
        console.error(err.message);
    }
  };
  useEffect(()=>{
    getNotess();
    
    }, []); 

  return (
    <div>
    <h2>Dashboard</h2>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Etudiant</h5>
              <p className="card-text">{studentCount}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Inscrits</h5>
              <p className="card-text">{validStatusCount}</p> {/* Updated */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total non Inscrits</h5>
              <p className="card-text">{invalidStatusCount}</p> {/* Updated */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
          
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Im</th>
        <th>Année_universitaire</th>
        <th>Statu</th>
       
      </tr>
    </thead>
    <tbody>
      { usereis.map(cartes=>(
      <tr key={cartes.id}>        
        <td>{cartes.im}</td>
        <td>{cartes.annee_universitaire}</td>
        <td>{cartes.statu}</td>
         
        
      </tr>
     ))}
      
    </tbody>
  </table><br/><br/>
 
 </div>
 
  );
};

export default MainPage;
