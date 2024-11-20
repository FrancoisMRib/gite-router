// src/components/EditablePricingTable.js
import React, { useState } from 'react';

export function EditablePricingTable({ rates, onUpdate }) {
  const [editableRates, setEditableRates] = useState(rates);

  const handleEditClick = (index) => {
    const updatedRates = [...editableRates];
    updatedRates[index].isEditing = true;
    setEditableRates(updatedRates);
  };

  const handlePriceChange = (index, newPrice) => {
    const updatedRates = [...editableRates];
    updatedRates[index].price = newPrice;
    setEditableRates(updatedRates);
  };

  const handleSaveClick = (index) => {
    const updatedRates = [...editableRates];
    updatedRates[index].isEditing = false;
    setEditableRates(updatedRates);
    onUpdate(updatedRates); // Callback pour actualiser les données si besoin
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Type de Chambre</th>
          <th>Tarif (€/nuit)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {editableRates.map((rate, index) => (
          <tr key={index}>
            <td>{rate.roomType}</td>
            <td>
              {rate.isEditing ? (
                <input
                  type="number"
                  value={rate.price}
                  onChange={(e) => handlePriceChange(index, e.target.value)}
                />
              ) : (
                rate.price
              )}
            </td>
            <td>
              {rate.isEditing ? (
                <button onClick={() => handleSaveClick(index)}>Enregistrer</button>
              ) : (
                <button onClick={() => handleEditClick(index)}>Modifier</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
