import { useState } from "react";

export default function ArrayNumeros() {
  const [numeros, setNumeros] = useState(["click en el boton =>"]);

  const handleClick = () => {
    const nuevoNumero = (numeros.length + 1).toString();
    setNumeros([...numeros, nuevoNumero]);
  };

  return (
    <div>
        <p>Ejemplo sencillo de bucles en react</p>
        <p>{numeros.map((numero) => (
          <span key={numero}>{numero},</span>
        ))}</p>
      <button onClick={handleClick}>Agregar número</button>
      
      
    </div>
  );
}
