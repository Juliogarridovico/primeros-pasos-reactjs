/*
Autor: Julio
Fecha: 24 de marzo de 2023
Descripción: 
Estas líneas de código son un ejemplo básico de un componente React llamado "Counter" que utiliza el hook useState para almacenar y actualizar un valor numérico "number".

La primera línea importa la biblioteca React y el hook useState, que permite a los componentes de React mantener un estado interno.

La función "Counter" se define como una función de flecha que devuelve un bloque de elementos JSX que representa la interfaz de usuario del contador. El valor inicial del número se establece en 0 utilizando el useState hook.

La función "sumar" se define como una función de flecha que incrementa el valor de "number" en 1 y lo actualiza utilizando el método "setNumber" proporcionado por el hook useState.

En el bloque JSX, se muestra el valor actual de "number" en un elemento div y se proporciona un botón que, cuando se hace clic, llama a la función "sumar".

En resumen, este código representa un simple contador de React que utiliza el hook useState para mantener y actualizar su estado interno.
*/

import React, { useState } from "react";

export default function Estados() {
  const [number, setNumber] = useState(0);
  const sumar = () => {
    setNumber(number + 1);
  };

  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    setTexto(event.target.value);
  };
  return (
    <div>
      <h2>Ejemplo de estados en ReactJS</h2>
      <p><strong>Estas líneas de código</strong> son un ejemplo básico de un componente React llamado "<strong>Counter</strong>" que utiliza el hook <strong>useState</strong> para almacenar y actualizar un valor numérico "<strong>number</strong>".</p>
<p>La primera línea importa la biblioteca React y el hook <strong>useState</strong>, que permite a los componentes de React mantener un estado interno.</p>
<p>La función "<strong>Counter</strong>" se define como una función de flecha que devuelve un bloque de elementos JSX que representa la interfaz de usuario del contador. El valor inicial del número se establece en 0 utilizando el <strong>useState</strong> hook.</p>
<p>La función "<strong>sumar</strong>" se define como una función de flecha que incrementa el valor de "<strong>number</strong>" en 1 y lo actualiza utilizando el método "<strong>setNumber</strong>" proporcionado por el hook <strong>useState</strong>.</p>
<p>En el bloque JSX, se muestra el valor actual de "<strong>number</strong>" en un elemento <strong>div</strong> y se proporciona un botón que, cuando se hace clic, llama a la función "<strong>sumar</strong>".</p>
<p>En resumen, este código representa un simple contador de React que utiliza el hook <strong>useState</strong> para mantener y actualizar su estado interno.</p>
      <div>{number}</div>
      <button onClick={sumar}>sumar</button>
      <div>
        <input type="text" value={texto} placeholder="escribe algo" onChange={handleChange} />
        <p>{texto}</p>
      </div>
      <hr />
      
    </div>
  );
}
