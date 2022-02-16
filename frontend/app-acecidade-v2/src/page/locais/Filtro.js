import { Box } from '@skynexui/components'

export default function Filtro (){
  return(
    <Box styleSheet={{border:'5px solid orange', padding:'10px', fontFamily:'Verdana, sans-serif', fontWeight: '900'}}>
          <h1>Filtro:</h1>
          <label for="acecidade1">Mobilidade reduzida </label>
          <input type="checkbox" name="acecidade1" value="Mobilidade reduzida"/> <br/>
          <label for="acecidade2">Orientações em braile </label>
          <input type="checkbox" name="acecidade2" value="Orientações em braile"/> <br/>
          <label for="acecidade3">Interprete de libras </label>
          <input type="checkbox" name="acecidade3" value="Interprete de libras"/>
          </Box>
  )
}