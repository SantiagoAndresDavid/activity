import React, { useState } from 'react';
import './crudApp.css'; // Import the CSS file

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',
    sexo: '',
    fechaNacimiento: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    if (Object.values(formData).some(value => value.trim() === '')) return;

    if (editingIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editingIndex ? formData : item
      );
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems([...items, formData]);
    }

    setFormData({
      id: '',
      tipoIdentificacion: '',
      numeroIdentificacion: '',
      nombre1: '',
      nombre2: '',
      apellido1: '',
      apellido2: '',
      sexo: '',
      fechaNacimiento: ''
    });
  };

  const handleEditItem = (index) => {
    setFormData(items[index]);
    setEditingIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>CRUD REACT READ & UPDATE</h1>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="tipoIdentificacion"
        placeholder="Tipo de Identificación"
        value={formData.tipoIdentificacion}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="numeroIdentificacion"
        placeholder="Número de Identificación"
        value={formData.numeroIdentificacion}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="nombre1"
        placeholder="Primer Nombre"
        value={formData.nombre1}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="nombre2"
        placeholder="Segundo Nombre"
        value={formData.nombre2}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="apellido1"
        placeholder="Primer Apellido"
        value={formData.apellido1}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="apellido2"
        placeholder="Segundo Apellido"
        value={formData.apellido2}
        onChange={handleInputChange}
      />

      <select
        name="sexo"
        value={formData.sexo}
        onChange={handleInputChange}
      >
        <option value="" disabled>Selecciona el Sexo</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>

      <input
        type="date"
        name="fechaNacimiento"
        value={formData.fechaNacimiento}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>
        {editingIndex !== null ? 'Actualizar' : 'Agregar'}
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <strong>ID:</strong> {item.id}, <strong>Tipo ID:</strong> {item.tipoIdentificacion}, <strong>Número ID:</strong> {item.numeroIdentificacion}, <strong>Nombre Completo:</strong> {`${item.nombre1} ${item.nombre2} ${item.apellido1} ${item.apellido2}`}, <strong>Sexo:</strong> {item.sexo}, <strong>Fecha de Nacimiento:</strong> {item.fechaNacimiento}
            </div>
            <div>
              <button onClick={() => handleEditItem(index)}>Editar</button>
              <button onClick={() => handleDeleteItem(index)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
