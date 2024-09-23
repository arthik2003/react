
import React, { useState } from 'react';

function CustomerList() {
  const [customers] = useState([
    { id: 1, firstName: 'Arthi', lastName: 'Krish' },
    { id: 2, firstName: 'Ajay', lastName: 'Krish' },
    { id: 3, firstName: 'Jaya', lastName: 'Krish' },
  ]);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;