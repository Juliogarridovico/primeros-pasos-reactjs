/*
Autor: Julio
Fecha: 24 de marzo de 2023
Descripción: 
En este ejemplo, la variable isVisible se inicializa como false usando el hook useState. La función toggleVisibility cambia el valor de isVisible de true a false y viceversa.

El botón llama a toggleVisibility cuando se hace clic. Si isVisible es true, el componente renderiza el elemento p que contiene el texto. Si isVisible es false, el componente no renderiza nada.

El operador ternario se utiliza aquí para evaluar el valor de isVisible y renderizar el elemento p si isVisible es true. De lo contrario, el operador ternario devuelve null, lo que significa que no se renderiza nada.

Espero que esto te ayude a entender cómo se utiliza un operador ternario para mostrar y ocultar un texto en React.
*/

import React, { useState } from "react";

export default function Operadorterniario() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
        <h2>Operador Terniario</h2>
        <p>En este ejemplo, la variable <b>isVisible</b> se inicializa como <b>false</b> usando el hook useState. La función <b>toggleVisibility</b> cambia el valor de <b>isVisible</b> de <b>true</b> a <b>false</b> y viceversa.</p>
<p>El botón llama a <b>toggleVisibility</b> cuando se hace clic. Si <b>isVisible</b> es <b>true</b>, el componente renderiza el elemento <b>p</b> que contiene el texto. Si <b>isVisible</b> es <b>false</b>, el componente no renderiza nada.</p>
<p>El operador ternario se utiliza aquí para evaluar el valor de <b>isVisible</b> y renderizar el elemento <b>p</b> si <b>isVisible</b> es <b>true</b>. De lo contrario, el operador ternario devuelve <b>null</b>, lo que significa que no se renderiza nada.</p>
<p>Espero que esto te ayude a entender cómo se utiliza un operador ternario para mostrar y ocultar un texto en React.</p>
      <button onClick={toggleVisibility}>Mostrar/Ocultar texto</button>
      {isVisible ? <p>Este es el texto que se muestra/oculta</p> : null}
      <hr/>
    </div>
  );
}
