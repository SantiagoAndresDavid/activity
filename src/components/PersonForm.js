import React, { useState } from 'react';
import axios from 'axios';

const PersonDetail = () => {
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [person, setPerson] = useState(null);

  const handleChange = (e) => {
    setIdentificationNumber(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/people/${identificationNumber}`);
      setPerson(response.data);
    } catch (error) {
      console.error('Error fetching person:', error);
      alert('Person not found');
      setPerson(null);
    }
  };

  return (
    <div>
      <div>
        <label>Identification Number:</label>
        <input type="text" value={identificationNumber} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {person && (
        <div>
          <h3>Person Details</h3>
          <p>Identification Type: {person.tipo_identificacion}</p>
          <p>Identification Number: {person.numero_identificacion}</p>
          <p>First Name 1: {person.nombre1}</p>
          <p>First Name 2: {person.nombre2}</p>
          <p>Last Name 1: {person.apellido1}</p>
          <p>Last Name 2: {person.apellido2}</p>
          <p>Gender: {person.sexo}</p>
          <p>Date of Birth: {person.fecha_nacimiento}</p>
        </div>
      )}
    </div>
  );
};

export default PersonDetail;
