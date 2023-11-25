import React, { Fragment, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReInscription = () => {
  const [userList, setUserList] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchNiveau, setSearchNiveau] = useState('');
  const [im, setIm] = useState('');
  const [niveau, setNiveau] = useState('');
  const [parcours, setParcours] = useState('');
  const [annee_universitaire, setAnnee_universitaire] = useState('');
  const [montant, setMontant] = useState('');
  const [numero_baurderau, setNumero_baurderau] = useState('');
  const [statu, setStatu] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const searchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/search?im=${searchId}&niveau=${searchNiveau}`);
      const jsonData = await response.json();
      setUserList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        im,
        niveau,
        parcours,
        annee_universitaire,
        montant,
        numero_baurderau,
        statu,
      };
      const response = await fetch('http://localhost:5000/useres', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/";

      setIm('');
      setNiveau('');
      setParcours('');
      setAnnee_universitaire('');
      setMontant('');
      setNumero_baurderau('');
      setStatu('');

      handleCloseModal();
      getNotes();
    } catch (err) {
      console.error(err.message);
    }
  };

  const getNotes = async () => {
    try {
      const response = await fetch('http://localhost:5000/useres');
      const jsonData = await response.json();
      setUserList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div>
        <br />
        <br />
        {/* ... (autre code JSX) */}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>fiche d'inscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ... (autre code JSX) */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant='danger' onClick={onSubmitForm}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
      <br />
      <br />
      <br />
      <Fragment>
        <p>The .table-hover class enables a hover state on table rows:</p>

        <table className='table table-hover'>
          <thead>
            <tr>
              <th>N°IM</th>
              <th>Niveau</th>
              <th>Parcours</th>
              <th>Année-Universitaire</th>
              <th>Montant</th>
              <th>N°Bordereau</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((inscriptions) => (
              <tr key={inscriptions.id}>
                <td>{inscriptions.im}</td>
                <td>{inscriptions.niveau}</td>
                <td>{inscriptions.parcours}</td>
                <td>{inscriptions.annee_universitaire}</td>
                <td>{inscriptions.montant}</td>
                <td>{inscriptions.numero_baurderau}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <h2>Dashboard</h2>

        <div>
          <form>
            <label>
              Recherche par ID:
              <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
            </label>
            <label>
              Recherche par Niveau:
              <input type="text" value={searchNiveau} onChange={(e) => setSearchNiveau(e.target.value)} />
            </label>
            <button type="button" onClick={searchUsers}>
              Rechercher
            </button>
          </form>
        </div>
      </Fragment>
    </>
  );
};

export default ReInscription;
