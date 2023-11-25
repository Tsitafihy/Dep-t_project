import React, { useState } from "react";
import axios from 'axios';

const SelectPage = () => {
  const [file, setFile] = useState(null);

  function upload() {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3001/upload', formData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload}>Ajouter</button>
    </div>
  );
}

export default SelectPage;
