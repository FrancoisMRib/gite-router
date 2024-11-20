// src/components/PricingTable.js
import React from 'react';

export function PricingTable({ rates }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type de Chambre</th>
          <th>Tarif (€/nuit)</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate, index) => (
          <tr key={index}>
            <td>{rate.roomType}</td>
            <td>{rate.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
