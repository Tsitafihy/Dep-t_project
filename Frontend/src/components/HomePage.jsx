import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Etudiant from "./Etudiant";
import CarteEtud from "./CarteEtud";
import ReInscription from "./ReInscription";
import MainPage from "./MainPage";
import PageImpression from "./PageImpression";
import SelectPage from './SelectPage';



const HomePage = () => {
    return (
        <div style={{ width: '99%' }}>

            <div className="row g-1">
                <div className="col-md-2 fs-6" >
                    <div className="bg-success sidebar">
                        <div style={{ height: '100vh' }}>
                            <div className='mx-auto pt-3' style={{ width: '200px' }}>
                                <h3 className='text-white'><i>Ecole Nationale d'Informatique</i></h3>
                                <hr color='white' size='5' />
                            </div>
                            <br /><br /><br /><br />
                            <div className='d-flex pt-5 justify-content-center'>
                                <ul className="nav flex-column fs-6">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="/etudiant"><i class="fas fa-graduation-cap"></i> Etudiant</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="/reinscription"><i class="fas fa-pen"></i> Re/Inscription</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="/carteEtud"><i class="fas fa-id-card"></i>  Carte d'Etudiants</a>
                                    </li>
                                </ul>


                            </div>

                        </div>
                        <div class="position-relative" >

                            <div class="position-absolute bottom-0 start-2">
                                <div className='ms-2'>
                                <h5 className='text-white'>  <i class="fa fa-user"></i> <i>User Name</i> </h5>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
                <Router>
                    <div className="col-md-10 bg-light">
                        <Routes>
                          <Route path="/Etudiant" element={<Etudiant />} />
                          <Route path="/ReInscription" element={<ReInscription />} />
                          <Route path="/CarteEtud" element={<CarteEtud />} />
                          <Route path="/PageImpression" element={<PageImpression />} />
                          <Route path="/SelectPage" element={<SelectPage />} />
                          <Route path="/" element={<MainPage />} />
                        </Routes>
                        {/* Main content */}
                    </div>
                </Router>

            </div>
        </div>
    );
};

export default HomePage;
