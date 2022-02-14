import React, {useEffect, useState} from 'react'
import { Box, Image } from '@skynexui/components'


export default function Locais() {

  const [github, setGithub] = useState({})


  useEffect(() => {
    fetch('https://api.github.com/users/jonasjesus42')
    .then( async (res) => await res.json())
     .then((res) => {
      setGithub(res)
     } )
  })

  return (
    <Box styleSheet={{
      display: 'flex'
    }}>
      <Box
        styleSheet={{
          backgroundColor: 'black',
          color: 'white',
          height: '100vh',
          margin: '35px 10px',
          padding: '16px',
          width: '25vw',
          borderRadius: '10px'
        }}
      >
        Box Component
      </Box>
      <Box
        styleSheet={{
          backgroundColor: 'black',
          color: 'white',
          height: 'auto',
          margin: '35px 10px',
          padding: '16px',
          width: '70vw',
          borderRadius: '10px'
        }}
      >

        <CardRestaurantes nomeRestaurante={github.name} />
        <CardRestaurantes nomeRestaurante='arroz' />
        <CardRestaurantes nomeRestaurante='livro' />
        <CardRestaurantes nomeRestaurante='bobs' />
        <CardRestaurantes nomeRestaurante='bobs' />
        <CardRestaurantes nomeRestaurante='bobs' />
        <CardRestaurantes nomeRestaurante='bobs' />
        <CardRestaurantes nomeRestaurante='bobs' />
        <CardRestaurantes nomeRestaurante='bobs' />



      </Box>
    </Box>
  )
}


function CardRestaurantes({ nomeRestaurante = 'trocar nome', imgSRC = "https://images.vexels.com/media/users/3/128437/isolated/lists/2dd809b7c15968cb7cc577b2cb49c84f-logotipo-de-restaurante-de-comida-de-pizza.png" }) {
  return (
    <>

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
        <Image
          src={imgSRC}
          styleSheet={{
            border: ''
          }}
        />
        <div>{nomeRestaurante}</div>
      </Box>

    </>
  )
}



/* nessesario em cada req   <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script> */

/* import {GoogleApiWrapper, Map, Maker} from 'google-maps-react'

export const MapContainer = (props) => {}

export default GoogleApiWrapper({
  apiKay:process.env.GOOGLE_KAY_API,
  lenguage: 'pt-br'
})(MapContainer) */