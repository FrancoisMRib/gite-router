import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Edit({ data, setData }) {
  const [formData, setFormData] = useState([...data]);
  const navigate = useNavigate();

  const handleInputChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(formData); // Met à jour les données globales
    navigate("/reservations"); // Retour à la page des réservations
  };

  return (
    <div>
      <h1>Modifier les Données</h1>
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <div key={index}>
            <label>
              Prénom :
              <input
                type="text"
                value={item.fname}
                onChange={(e) =>
                  handleInputChange(index, "fname", e.target.value)
                }
              />
            </label>
            <label>
              Nom :
              <input
                type="text"
                value={item.lname}
                onChange={(e) =>
                  handleInputChange(index, "lname", e.target.value)
                }
              />
            </label>
          </div>
        ))}
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}