import React from 'react';
import { EditablePricingTable } from '../EditablePricingtable';

export function AdminPricing() {
  return (
    <div>
      <h2>Admin - Modifier les tarifs</h2>
      <EditablePricingTable />
    </div>
  );
}