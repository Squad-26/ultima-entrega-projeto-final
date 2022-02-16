import { Box } from '@skynexui/components'
import './Filtro.css'
export default function Filtro (){

  return(
    
    <Box tag='div' className="custom-checkbox">
      
          <h1>Filtro:</h1>
          <label for="acecidade1">Mobilidade reduzida </label>
          <input type="checkbox" id="acecidade1" /> 
          <label for="acecidade2">Orientações em braile </label>
          <input type="checkbox" id="acecidade2" /> 
          <label for="acecidade3">Interprete de libras </label>
          <input type="checkbox" id="acecidade3"/>
          </Box>
  )
}