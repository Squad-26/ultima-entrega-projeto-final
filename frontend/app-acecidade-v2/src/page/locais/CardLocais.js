import { Box, Image } from '@skynexui/components'
import React from 'react'

function CardRestaurantes({
  nomeRestaurante = 'trocar nome',
  descrRest = 'descrição',
  imgSRC = 'troca imagem',
  icoDef1='https://images.vexels.com/media/users/3/194664/isolated/lists/f19df9d4bcf1229f9b623358c69db93b-icone-de-alerta-para-deficiencia-visual.png',
  icoDef2='https://site.sorriso.mt.gov.br/storage/app/uploads/public/a1c/a7d/83e/thumb__600_0_0_0_auto.png',
  icoDef3 ='https://imagepng.org/wp-content/uploads/2017/09/simbolo-cadeirante-acessibilidade.png',

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
        <Image src={imgSRC} styleSheet={{padding: '10px' }} />
        <Box styleSheet={{margin: '5px', height:'20%'}}>{nomeRestaurante} </Box>
        <Box styleSheet={{margin: '10px', height:'30%'}}>{descrRest}</Box>
        <Box styleSheet= {{height:'50px', width: '50px', margin: '10px'}}></Box>
        <Box tag='div' styleSheet={{display:'block'}}>
          <Image src={icoDef1} styleSheet={{height:'45px', width:'45px', margin: '17px'}}/>
          <Image src={icoDef2} styleSheet={{height:'45px', width:'45px', margin: '17px'}}/>
          <Image src={icoDef3} styleSheet={{height:'45px', width:'45px', margin: '17px'}}/>
        </Box>
      </Box>
    </div>
  )
}

export default CardRestaurantes
