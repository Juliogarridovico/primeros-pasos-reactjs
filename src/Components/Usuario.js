export default  function Usuario(props) {
  return (
    <div>
    <p>Este código representa un componente de React llamado "Usuario" que acepta una prop llamada "ejemploPropNombre". Dentro del componente, hay un contenedor de div que envuelve tres elementos: un encabezado que muestra el valor de la prop "ejemploPropNombre", y dos párrafos que muestran los valores "27" y "espanin", respectivamente.</p>
      <p>{props.ejemploPropNombre}</p>
      <p>27</p>
      <p>espanin</p>
      <hr/>
    </div>
  );
}


