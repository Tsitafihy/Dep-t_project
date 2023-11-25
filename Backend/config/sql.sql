
INSERT INTO cartes(
	numero, date_expiration, annee_universitaire, status)
	VALUES ('', '', '', '');

INSERT INTO etudiants(
	im, nom, prenom, date_lieu_naissance, cin, adresse, contact, niveau, parcours, sex, photo)
	VALUES ('', '', '', '', '', '', '', '', '', '', '');    

INSERT INTO inscriptions(
	n_bordereau, montant, etat_payement, date)
	VALUES ('444', '500000', 'Non', '2023-12-20');    

1-List Databases:
\l

2-Connect to a Database Server:
\c dbname

3-List Tables:
\dt

4-List Schemas:
\dn

5-Show all column a Table
\d+ Table_name

6-Create a Database:
CREATE DATABASE database_name;

7-Drop a Database:
DROP DATABASE database_name;

8-List Table Columns:
\d table_name

/////////////////////////////////////
const query = `
      SELECT t1.column1, t2.column2
      FROM table1 AS t1
      JOIN table2 AS t2 ON t1.id = t2.table1_id
    `;

	CREATE TABLE inscriptions(id SERIAL PRIMARY KEY, im VARCHAR(100 ), niveau VARCHAR(100), 
	parcours VARCHAR(200 ), annee_universitaire VARCHAR(100), montant VARCHAR(100), numero_baurderau VARCHAR(100));

	CREATE TABLE cartes(id SERIAL PRIMARY KEY,
	 im VARCHAR(100 ), annee_universitaire VARCHAR(100), statu VARCHAR(100));

	 CREATE TABLE etudiants(id SERIAL PRIMARY KEY,
	 im VARCHAR(100 ), nom VARCHAR(100), prenom VARCHAR(100), naissance VARCHAR(100),lieu VARCHAR(150), cin VARCHAR(100), tel VARCHAR(100), adresse VARCHAR(150));