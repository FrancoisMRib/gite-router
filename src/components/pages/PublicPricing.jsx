// src/pages/PublicPricing.js
import React from 'react';
import { PricingTable } from '../PricingTable';

export function PublicPricing() {
  return (
    <div>
      <h2>Tarifs de l'hôtel</h2>
      <PricingTable isEditable={false} />
    </div>
  );
}
