import { Box, Image } from '@skynexui/components'
import React from 'react'
import 

function CardRestaurantes({
  nomeRestaurante = 'trocar nome',
  descrRest = 'descrição',
  imgSRC = 'troca imagem',
  icoDef1='https://images.vexels.com/media/users/3/194664/isolated/lists/f19df9d4bcf1229f9b623358c69db93b-icone-de-alerta-para-deficiencia-visual.png',
  icoDef2='https://site.sorriso.mt.gov.br/storage/app/uploads/public/a1c/a7d/83e/thumb__600_0_0_0_auto.png',
  icoDef3 = 'https://imagepng.org/wp-content/uploads/2017/09/simbolo-cadeirante-acessibilidade.png',

}) {
  return (
    <div>
      <Box
        styleSheet={{
          backgroundColor: {
            xl: 'orange'
          },
          color: 'white',
          margin: '16px',
          padding: '16px',
          display: 'flex'
        }}
      >
        <Image src={imgSRC} styleSheet={{padding: '16px' }} />
        <Box styleSheet={{margin: '20px'}}>{nomeRestaurante} </Box>
        <Box styleSheet={{margin: '20px', width: '50%'}}>{descrRest}</Box>
        <Box styleSheet= {{height:'50px', width: '50px', margin: '10px'}}></Box>
        <Box tag='div' styleSheet={{display:''}}>
          <Image src={icoDef1} styleSheet={{height:'50px', width:'50px', margin: '20px'}}/>
          <Image src={icoDef2} styleSheet={{height:'50px', width:'50px', margin: '20px'}}/>
          <Image src={icoDef3} styleSheet={{height:'50px', width:'50px', margin: '20px'}}/>
        </Box>
      </Box>
    </div>
  )
}

function Filtro (){
  return(
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
  )
}


export default (CardRestaurantes, Filtro)
