function MyComponent(){

const data = [
  {
    name : 'Dev Soutinho',
    name : 'Gamorra'
  }
];

return (

<div>
  <pre>
      {
        /* Melhor Jeito de Debugar um objeto/array */
      }
      {
        JSON.stringify(data, null, 2);
      }
  </pre>
</div>

) // end return function

} // end function 