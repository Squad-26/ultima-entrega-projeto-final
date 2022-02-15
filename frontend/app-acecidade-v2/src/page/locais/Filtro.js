import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
function Filtro (){
  return(
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Filtro de Acecidades
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Acesso a mobilidade reduzida</a></li>
    <li><a class="dropdown-item" href="#">Orientações em libras</a></li>
    <li><a class="dropdown-item" href="#">Interprete de libras</a></li>
  </ul>
  </div>
  )
}


export default Filtro