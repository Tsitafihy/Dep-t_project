import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import uflogo from '../img/logoUF.png';
import enilogo from '../img/logoENI.png';
import studProf from '../img/studentProfile.jpg';
import codeQr from '../img/codeqr.png';
import './PageImpression';
import PageImpression from "./PageImpression";


const CarteEtud = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert('print success')
  });
     return (
    /* 
    <div ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
      <h1>heloo</h1>
      <p><button class="btn btn-primary" onClick={handlePrint}>Imprimer</button></p>
    </div>
    
    </>*/
    <>
      <div style={{ textAlign: 'right' }}><button class="btn btn-primary" onClick={handlePrint}>Imprimer</button></div>
      <d ref={componentRef}>
      <div class="row" ref={componentRef} style={{ width: '100%', height: window.innerHeight}}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <div className="row">
                <div className="col-sm-4">
                  <div className="row g-0">
                    <div className="col">
                      <img src={uflogo} width={45} alt="UF logo" />
                    </div>
                    <div className="col">
                      <img src={enilogo} width={50} alt="ENI logo" />
                    </div>
                  </div>
                  <img src={studProf} width={100} alt=" Student profile" />
                  <p class="card-text">N°IM: <i>1200</i><br /> Niveau: <i>M1</i><br /> Parcour: <i>IG</i></p>

                </div>

                <div className="col-sm-8">
                  <div style={{ textAlign: 'center' }}>
                    <h6 style={{ fontSize: '12px' }} >MINISTERE DE L'ENSEIGNEMENT SUPERIEUR ET DE LA RECHERCHE SCIENTIFIQUE</h6>
                    <h6 className='card-title' style={{ fontSize: '13px' }}>UNIVERSITE DE FIANARANTSOA <br />ECOLE NATIONALE D'INFORAMATIQUE</h6>
                    <p class="card-text" style={{ lineHeight: '0.2', fontSize: '10px' }}>" Ecole ingénieuse pépinière des élites informaticiennes "</p>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    <p class="card-text"><i>Nom: MANJOASY</i><br /><i>Prénoms: Tinahindraza Armand</i><br /><i>Ne(é) le: 23/12/1997 à: Ambovombe</i> <br /><i>CIN: 51603836884</i><br /><i>Tél: 0340139992</i><br /><i>Adresse: Tanambao</i></p>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className='col-sm-8'>
                  <p class="card-text" style={{ lineHeight: '1.5' }}>Année Universitaire: <i>2022 - 2023</i></p>
                </div>
                <div className='col-sm-4'>
                  <p class="card-text">L'étudiant(e)</p>
                </div>
              </div>

              {/* <img src={codeQr} width={60} alt="Code Qr" />*/}
            </div>

          </div>
        </div>

        {/* <div class="col-sm-6" >
          <div class="card" >
            <div class="card-body" style={{ marginBottom: '-15px' }}>
              

            </div>
          </div>

  </div> */}

      </div>
       
      
      <div class="row"  style={{ width: '100%', height: window.innerHeight, marginTop:-703 , marginLeft:600}} >
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body" >
              <div className="row">
                <div className="col-sm-4">
                  <div className="row g-0">
                    <div className="col">
                      <img src={uflogo} width={45} alt="UF logo" />
                    </div>
                    <div className="col">
                      <img src={enilogo} width={50} alt="ENI logo" />
                    </div>
                  </div>
                  <img src={studProf} width={100} alt=" Student profile" />
                  <p class="card-text">N°IM: <i>1200</i><br /> Niveau: <i>M1</i><br /> Parcour: <i>IG</i></p>

                </div>

                <div className="col-sm-8">
                  <div style={{ textAlign: 'center' }}>
                    <h6 style={{ fontSize: '12px' }} >MINISTERE DE L'ENSEIGNEMENT SUPERIEUR ET DE LA RECHERCHE SCIENTIFIQUE</h6>
                    <h6 className='card-title' style={{ fontSize: '13px' }}>UNIVERSITE DE FIANARANTSOA <br />ECOLE NATIONALE D'INFORAMATIQUE</h6>
                    <p class="card-text" style={{ lineHeight: '0.2', fontSize: '10px' }}>" Ecole ingénieuse pépinière des élites informaticiennes "</p>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    <p class="card-text"><i>Nom: MANJOASY</i><br /><i>Prénoms: Tinahindraza Armand</i><br /><i>Ne(é) le: 23/12/1997 à: Ambovombe</i> <br /><i>CIN: 51603836884</i><br /><i>Tél: 0340139992</i><br /><i>Adresse: Tanambao</i></p>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className='col-sm-8'>
                  <p class="card-text" style={{ lineHeight: '1.5' }}>Année Universitaire: <i>2022 - 2023</i></p>
                </div>
                <div className='col-sm-4'>
                  <p class="card-text">L'étudiant(e)</p>
                </div>
              </div>

              {/* <img src={codeQr} width={60} alt="Code Qr" />*/}
            </div>

          </div>
        </div>
      </div>
      

      {/* page suivante  */}
       

      <div class="row" ref={componentRef} style={{ width: '100%', height: window.innerHeight, marginTop:-400 }}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <div className="row">
                <div className="col-sm-4">
                  <div className="row g-0">
                    <div className="col">
                      <img src={uflogo} width={45} alt="UF logo" />
                    </div>
                    <div className="col">
                      <img src={enilogo} width={50} alt="ENI logo" />
                    </div>
                  </div>
                  <img src={studProf} width={100} alt=" Student profile" />
                  <p class="card-text">N°IM: <i>1200</i><br /> Niveau: <i>M1</i><br /> Parcour: <i>IG</i></p>

                </div>

                <div className="col-sm-8">
                  <div style={{ textAlign: 'center' }}>
                    <h6 style={{ fontSize: '12px' }} >MINISTERE DE L'ENSEIGNEMENT SUPERIEUR ET DE LA RECHERCHE SCIENTIFIQUE</h6>
                    <h6 className='card-title' style={{ fontSize: '13px' }}>UNIVERSITE DE FIANARANTSOA <br />ECOLE NATIONALE D'INFORAMATIQUE</h6>
                    <p class="card-text" style={{ lineHeight: '0.2', fontSize: '10px' }}>" Ecole ingénieuse pépinière des élites informaticiennes "</p>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    <p class="card-text"><i>Nom: MANJOASY</i><br /><i>Prénoms: Tinahindraza Armand</i><br /><i>Ne(é) le: 23/12/1997 à: Ambovombe</i> <br /><i>CIN: 51603836884</i><br /><i>Tél: 0340139992</i><br /><i>Adresse: Tanambao</i></p>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className='col-sm-8'>
                  <p class="card-text" style={{ lineHeight: '1.5' }}>Année Universitaire: <i>2022 - 2023</i></p>
                </div>
                <div className='col-sm-4'>
                  <p class="card-text">L'étudiant(e)</p>
                </div>
              </div>

              {/* <img src={codeQr} width={60} alt="Code Qr" />*/}
            </div>

          </div>
        </div>

        {/* <div class="col-sm-6" >
          <div class="card" >
            <div class="card-body" style={{ marginBottom: '-15px' }}>
              

            </div>
          </div>

  </div> */}

      </div>
       
      
      <div class="row"  style={{ width: '100%', height: window.innerHeight, marginTop:-703 , marginLeft:600}} >
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body" >
              <div className="row">
                <div className="col-sm-4">
                  <div className="row g-0">
                    <div className="col">
                      <img src={uflogo} width={45} alt="UF logo" />
                    </div>
                    <div className="col">
                      <img src={enilogo} width={50} alt="ENI logo" />
                    </div>
                  </div>
                  <img src={studProf} width={100} alt=" Student profile" />
                  <p class="card-text">N°IM: <i>1200</i><br /> Niveau: <i>M1</i><br /> Parcour: <i>IG</i></p>

                </div>

                <div className="col-sm-8">
                  <div style={{ textAlign: 'center' }}>
                    <h6 style={{ fontSize: '12px' }} >MINISTERE DE L'ENSEIGNEMENT SUPERIEUR ET DE LA RECHERCHE SCIENTIFIQUE</h6>
                    <h6 className='card-title' style={{ fontSize: '13px' }}>UNIVERSITE DE FIANARANTSOA <br />ECOLE NATIONALE D'INFORAMATIQUE</h6>
                    <p class="card-text" style={{ lineHeight: '0.2', fontSize: '10px' }}>" Ecole ingénieuse pépinière des élites informaticiennes "</p>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    <p class="card-text"><i>Nom: MANJOASY</i><br /><i>Prénoms: Tinahindraza Armand</i><br /><i>Ne(é) le: 23/12/1997 à: Ambovombe</i> <br /><i>CIN: 51603836884</i><br /><i>Tél: 0340139992</i><br /><i>Adresse: Tanambao</i></p>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className='col-sm-8'>
                  <p class="card-text" style={{ lineHeight: '1.5' }}>Année Universitaire: <i>2022 - 2023</i></p>
                </div>
                <div className='col-sm-4'>
                  <p class="card-text">L'étudiant(e)</p>
                </div>
              </div>

              {/* <img src={codeQr} width={60} alt="Code Qr" />*/}
            </div>

          </div>
        </div>
      </div>
      {/*  table ici 01*/ }
      <div class="col-sm-6" style={{marginTop:-400, width: '48%', height: window.innerHeight}}>
      <div class="card">
      <div class="card-body" style={{marginBottom:'-15px'}}>
      <table class="table table-bordered table-sm">     

       
              <thead>
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">N° Bordereau</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Etat de Payement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>386484</td>
                  <td>682500</td>
                  <td>Payé</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </table>
            <div className="row">
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}> Cachet de l'Etablissement <br /> <span style={{ textDecoration: 'underline' }}>Le secrétaire principal</span></p> <br />
                <p className='card-text' style={{ fontSize: '12px' }}> <b>RABEMANANTSOA</b> Auguste Patrice</p>
              </div>
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}>Visite Médicale <br /> Ce.....................</p>
              </div>
            </div>
            <h6 className='card-title' style={{ textAlign: 'center', fontSize: '12px' }}>NOTA BENE</h6>
            <div className="card-text" style={{ fontSize: '10px', marginBottom: '-5px' }}>
              <p>* Aucun acte scolaire ne peut être accompli sans cette carte qui est rigoureusement personnelle. <br />* Cette carte doit être présentée examens <br />* Nul ne peut se présenter à l'examen s'il n'a pas subi la visite médicale organisée par le Service de la Médecine Préventive. <br />* Toute perte de cette carte entraînera une pénalisation de la somme de Ar 10 000.</p>
             </div>
            </div>
            </div>
          </div>

          {/*  table ici 02*/}

          <div class="col-sm-6" style={{marginTop:-350, width: '48%', height: window.innerHeight, marginLeft:615, marginTop:-705}}>
      <div class="card">
      <div class="card-body" style={{marginBottom:'-15px'}}>
      <table class="table table-bordered table-sm">     

       
              <thead>
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">N° Bordereau</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Etat de Payement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>386484</td>
                  <td>682500</td>
                  <td>Payé</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </table>
            <div className="row">
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}> Cachet de l'Etablissement <br /> <span style={{ textDecoration: 'underline' }}>Le secrétaire principal</span></p> <br />
                <p className='card-text' style={{ fontSize: '12px' }}> <b>RABEMANANTSOA</b> Auguste Patrice</p>
              </div>
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}>Visite Médicale <br /> Ce.....................</p>
              </div>
            </div>
            <h6 className='card-title' style={{ textAlign: 'center', fontSize: '12px' }}>NOTA BENE</h6>
            <div className="card-text" style={{ fontSize: '10px', marginBottom: '-5px' }}>
              <p>* Aucun acte scolaire ne peut être accompli sans cette carte qui est rigoureusement personnelle. <br />* Cette carte doit être présentée examens <br />* Nul ne peut se présenter à l'examen s'il n'a pas subi la visite médicale organisée par le Service de la Médecine Préventive. <br />* Toute perte de cette carte entraînera une pénalisation de la somme de Ar 10 000.</p>
             </div>
            </div>
            </div>
          </div>
          {/*table 03 */ }

          <div class="col-sm-6" style={{marginTop:-350, width: '48%', height: window.innerHeight}}>
      <div class="card">
      <div class="card-body" style={{marginBottom:'-15px'}}>
      <table class="table table-bordered table-sm">     

       
              <thead>
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">N° Bordereau</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Etat de Payement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>386484</td>
                  <td>682500</td>
                  <td>Payé</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </table>
            <div className="row">
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}> Cachet de l'Etablissement <br /> <span style={{ textDecoration: 'underline' }}>Le secrétaire principal</span></p> <br />
                <p className='card-text' style={{ fontSize: '12px' }}> <b>RABEMANANTSOA</b> Auguste Patrice</p>
              </div>
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}>Visite Médicale <br /> Ce.....................</p>
              </div>
            </div>
            <h6 className='card-title' style={{ textAlign: 'center', fontSize: '12px' }}>NOTA BENE</h6>
            <div className="card-text" style={{ fontSize: '10px', marginBottom: '-5px' }}>
              <p>* Aucun acte scolaire ne peut être accompli sans cette carte qui est rigoureusement personnelle. <br />* Cette carte doit être présentée examens <br />* Nul ne peut se présenter à l'examen s'il n'a pas subi la visite médicale organisée par le Service de la Médecine Préventive. <br />* Toute perte de cette carte entraînera une pénalisation de la somme de Ar 10 000.</p>
             </div>
            </div>
            </div>
          </div>

          {/*table 04 */}

          <div class="col-sm-6" style={{marginTop:-350, width: '48%', height: window.innerHeight}}>
      <div class="card">
      <div class="card-body" style={{marginBottom:'-15px'}}>
      <table class="table table-bordered table-sm">     

       
              <thead>
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">N° Bordereau</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Etat de Payement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>386484</td>
                  <td>682500</td>
                  <td>Payé</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </table>
            <div className="row">
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}> Cachet de l'Etablissement <br /> <span style={{ textDecoration: 'underline' }}>Le secrétaire principal</span></p> <br />
                <p className='card-text' style={{ fontSize: '12px' }}> <b>RABEMANANTSOA</b> Auguste Patrice</p>
              </div>
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}>Visite Médicale <br /> Ce.....................</p>
              </div>
            </div>
            <h6 className='card-title' style={{ textAlign: 'center', fontSize: '12px' }}>NOTA BENE</h6>
            <div className="card-text" style={{ fontSize: '10px', marginBottom: '-5px' }}>
              <p>* Aucun acte scolaire ne peut être accompli sans cette carte qui est rigoureusement personnelle. <br />* Cette carte doit être présentée examens <br />* Nul ne peut se présenter à l'examen s'il n'a pas subi la visite médicale organisée par le Service de la Médecine Préventive. <br />* Toute perte de cette carte entraînera une pénalisation de la somme de Ar 10 000.</p>
             </div>
            </div>
            </div>
          </div>

          {/* page 04 */}

          <div class="col-sm-6" style={{marginTop:-200, width: '48%', height: window.innerHeight}}>
      <div class="card">
      <div class="card-body" style={{marginBottom:'-15px'}}>
      <table class="table table-bordered table-sm">     

       
              <thead>
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">N° Bordereau</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Etat de Payement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>386484</td>
                  <td>682500</td>
                  <td>Payé</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </table>
            <div className="row">
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}> Cachet de l'Etablissement <br /> <span style={{ textDecoration: 'underline' }}>Le secrétaire principal</span></p> <br />
                <p className='card-text' style={{ fontSize: '12px' }}> <b>RABEMANANTSOA</b> Auguste Patrice</p>
              </div>
              <div className="col-sm-6">
                <p className='card-text' style={{ textAlign: 'center' }}>Visite Médicale <br /> Ce.....................</p>
              </div>
            </div>
            <h6 className='card-title' style={{ textAlign: 'center', fontSize: '12px' }}>NOTA BENE</h6>
            <div className="card-text" style={{ fontSize: '10px', marginBottom: '-5px' }}>
              <p>* Aucun acte scolaire ne peut être accompli sans cette carte qui est rigoureusement personnelle. <br />* Cette carte doit être présentée examens <br />* Nul ne peut se présenter à l'examen s'il n'a pas subi la visite médicale organisée par le Service de la Médecine Préventive. <br />* Toute perte de cette carte entraînera une pénalisation de la somme de Ar 10 000.</p>
             </div>
            </div>
            </div>
          </div>
          </d>
          
    </>

  );
};

export default CarteEtud;
