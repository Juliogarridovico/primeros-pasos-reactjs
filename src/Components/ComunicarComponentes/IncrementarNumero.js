import React from 'react';

const IncrementarNumero = ({incrementar}) => {
  return (
    <div>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default IncrementarNumero;
