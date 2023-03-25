import React, { useState } from 'react';
import MostrarNumero from './MostrarNumero';
import IncrementarNumero from './IncrementarNumero';

const ResultadoFinal = () => {
  const [numero, setNumero] = useState(0);

  const incrementarNumero = () => {
    setNumero(numero + 1);
  }

  return (
    <div>
        

<p>Este es un ejemplo de una aplicación React que consta de tres archivos: <strong>MostrarNumero</strong>, <strong>IncrementarNumero</strong> y <strong>ResultadoFinal</strong>.</p>
<p>El archivo <strong>MostrarNumero</strong> define un componente que muestra el número actual. Recibe el número actual como una prop y lo muestra en un elemento div con un párrafo que contiene la cadena "El número actual es:" y el número actual.</p>
<p>El archivo <strong>IncrementarNumero</strong> define un componente que incrementa el número actual cuando se hace clic en un botón. Recibe una función como una prop que se llama cuando se hace clic en el botón. El botón está contenido en un elemento div.</p>
<p>El archivo <strong>ResultadoFinal</strong> define un componente que representa la aplicación completa. Utiliza el hook useState para mantener el número actual como un estado interno. También define la función incrementarNumero, que actualiza el número actual cuando se llama. Dentro del componente, se muestra el número actual utilizando el componente MostrarNumero y se proporciona un botón para incrementar el número actual utilizando el componente IncrementarNumero. También hay una línea horizontal que separa los dos componentes.</p>
<p>Al final, cuando estos tres archivos se combinan, se crea una aplicación React que muestra el número actual y permite al usuario incrementarlo haciendo clic en un botón.</p>
      <MostrarNumero numero={numero} />
      <IncrementarNumero incrementar={incrementarNumero} />
      <hr/>
    </div>
  );
}

export default ResultadoFinal;