import { Box, Image } from '@skynexui/components'
import React from 'react'


function CardRestaurantes({
  nomeRestaurante = 'trocar nome',
  descrRest = 'descrição',
  imgSRC = 'troca imagem',
  icone1= false,
  icone2= false,
  icone3= false }) {
  return (
    
      <Box
        styleSheet={{
          backgroundColor: {
            xl: 'orange'},
          color: 'white',
          margin: '16px',
          padding: '16px',
          display: 'flex'}}>

          <Image src={imgSRC} styleSheet={{ height:'225px', width: '225px', margin:'auto', border:'5px solid black', borderRadius:'5px' }}/>
          <Box styleSheet={{margin: '20px', color:'black', fontFamily:'Verdana, sans-serif', fontWeight: '900'}}>{nomeRestaurante} </Box>
          <Box styleSheet={{margin: '20px', width: '50%', color:'black', fontFamily:'Verdana, sans-serif', fontWeight: '900'}}>{descrRest}</Box>
          <Box tag='div' styleSheet={{display:''}}>
          {icone1? <Image src='https://images.vexels.com/media/users/3/194664/isolated/lists/f19df9d4bcf1229f9b623358c69db93b-icone-de-alerta-para-deficiencia-visual.png' styleSheet={{height:'50px', width:'50px', margin: '20px'}}/> : null}
          {icone2? <Image src='https://site.sorriso.mt.gov.br/storage/app/uploads/public/a1c/a7d/83e/thumb__600_0_0_0_auto.png' styleSheet={{height:'50px', width:'50px', margin: '20px'}}/>:null}
          {icone3? <Image src='https://imagepng.org/wp-content/uploads/2017/09/simbolo-cadeirante-acessibilidade.png' styleSheet={{height:'50px', width:'50px', margin: '20px'}}/> : null}
        </Box>
      </Box>
  )
}



export default CardRestaurantes
