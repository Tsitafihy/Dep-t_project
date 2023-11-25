import React, { useState } from 'react';


const ReInscrInfo = () => {
    const [studentData, setStudentData] = useState({
        id: '1018',
        name: 'MANJOASY',
        lastName: 'Tinahindraza Armand',
        date: '12/23/1997',
        place: 'Ambovombe-Androy',
        cin: '51601103484',
        tel: 'O340139992',
        address: 'Tanambao',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to a server.
        console.log(studentData);
    };

    return (
        <div className="container">
 
            <br />
            <h2>Données de Réinscription</h2>
            <br />
            
            <form onSubmit={handleSubmit}>
                <div className='row'>

                    <div className='col-md-4'>
                        <div className="form-group">
                            <label htmlFor="id">N°IM :</label>
                            <input
                                type="text"
                                className="form-control"
                                id="id"
                                name="id"
                                value={studentData.id}
                                onChange={handleInputChange}
                            />

                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className="form-group">
                            <div class="form-floating">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Quel est votre niveau</option>
                                    <option value="1">L1</option>
                                    <option value="2">L2</option>
                                    <option value="3">L3</option>
                                    <option value="1">M1</option>
                                    <option value="2">M2</option>
                                </select>
                                <label for="floatingSelect">Niveau</label>
                            </div>
                        </div> <br />
                        <div className="form-group">
                            <div class="form-floating">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Quel est votre parcour</option>
                                    <option value="1">IG</option>
                                    <option value="2">GB</option>
                                    <option value="3">ASR</option>

                                </select>
                                <label for="floatingSelect">Parcours</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="au">Année-Univeristaire : </label>
                            <input
                                type="text"
                                className="form-control"
                                id="au"
                                name="au"
                                value={studentData.au}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="montant">Montant : </label>
                            <input
                                type="number"
                                className="form-control"
                                id="montant"
                                name="montant"
                                value={studentData.montant}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Bordereau">N°Bordereau : </label>
                            <input
                                type="number"
                                className="form-control"
                                id="bordereau"
                                name="bordereau"
                                value={studentData.berdereau}
                                onChange={handleInputChange}
                            />
                        </div>
                        <br />
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                            <button type="submit" className="btn btn-primary d-flex">
                                Enregistrer
                            </button>
                        </div>

                    </div>

                </div>
            </form>

        </div>
    );
};


export default ReInscrInfo