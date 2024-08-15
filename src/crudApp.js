import React, { useState } from 'react';

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
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
  const [showRecords, setShowRecords] = useState(false);


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

  const toggleShowRecords = () => {
    setShowRecords(!showRecords);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 blur-[118px]" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
      <div className="relative z-10 mx-auto px-4 py-24 max-w-4xl">
        <div className="h-full w-full bg-slate-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 px-10 py-7">
          <h1 className="text-4xl font-raleway font-extrabold flex justify-center">CRUD REACT</h1>
          <p className="text-center mb-8">Read & Update</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label for="tipoIdentificacion" className="block mb-2 text-sm font-medium text-gray-900">Tipo de identificación</label>
              <select
                name="tipoIdentificacion"
                id='tipoIdentificacion'
                value={formData.tipoIdentificacion}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Selecciona un tipo</option>
                <option value="Cédula de Ciudadanía - CC">Cédula de Ciudadanía (CC)</option>
                <option value="Cédula de Extranjería - CE">Cédula de Extranjería (CE)</option>
                <option value="Tarjeta de Identidad - TI">Tarjeta de Identidad (TI)</option>
                <option value="Número de Identificación Tributaria - NIT">Número de Identificación Tributaria (NIT)</option>
                <option value="Pasaporte - PAS">Pasaporte (PAS)</option>
                <option value="Permiso Especial de Permanencia - PEP">Permiso Especial de Permanencia (PEP)</option>
              </select>
            </div>

            <div>
              <label for="numeroIdentificacion" className="block mb-2 text-sm font-medium text-gray-900">Numero de identificación</label>
              <input
                type="number"
                id='numeroIdentificacion'
                name="numeroIdentificacion"
                placeholder="Sin espacios, ni puntos, ni comas"
                value={formData.numeroIdentificacion}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div>
              <label for="nombre1" className="block mb-2 text-sm font-medium text-gray-900">Primer nombre</label>
              <input
                type="text"
                name="nombre1"
                id='nombre1'
                placeholder="Carlos"
                value={formData.nombre1}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label for="nombre2" className="block mb-2 text-sm font-medium text-gray-900">Segundo nombre</label>
              <input
                type="text"
                id='nombre2'
                name="nombre2"
                placeholder="Andrés"
                value={formData.nombre2}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label for="apellido1" className="block mb-2 text-sm font-medium text-gray-900">Primer apellido</label>
              <input
                type="text"
                name="apellido1"
                id='apellido1'
                placeholder="Pérez"
                value={formData.apellido1}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label for="apellido2" className="block mb-2 text-sm font-medium text-gray-900">Segundo apellido</label>
              <input
                type="text"
                id='apellido2'
                name="apellido2"
                placeholder="Gómez"
                value={formData.apellido2}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div>
              <label for="sexo" className="block mb-2 text-sm font-medium text-gray-900">Sexo</label>
              <select
                name="sexo"
                id='sexo'
                value={formData.sexo}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="" disabled>Selecciona el sexo</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div>
              <label for="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900">Fecha de nacimiento</label>
              <input
                type="date"
                id='fechaNacimiento'
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>

          <div className='flex justify-center '>
            <button
              onClick={handleAddItem}
              className="mt-5 text-white bg-gradient-to-r bg-indigo-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {editingIndex !== null ? 'Actualizar' : 'Agregar'}
            </button>
          </div>
        </div>

        <div className='flex justify-center mt-10'>
          <button
            onClick={toggleShowRecords}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            {showRecords ? 'Ocultar registros' : 'Mostrar registros'}
          </button>
        </div>

        {showRecords && (
          <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 bg-indigo-600 text-white py-3 px-6">Registros almacenados</h2>
            {items.length === 0 ? (
              <p className="text-center py-4 text-gray-500">No hay registros almacenados.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {items.map((item, index) => (
                  <li key={index} className="hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                    <div className="p-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {`${item.nombre1} ${item.nombre2} ${item.apellido1} ${item.apellido2}`}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {item.tipoIdentificacion}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            {item.sexo}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {item.fechaNacimiento}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          {item.numeroIdentificacion}
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-3">
                        <button
                          onClick={() => handleEditItem(index)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteItem(index)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default CrudApp;
