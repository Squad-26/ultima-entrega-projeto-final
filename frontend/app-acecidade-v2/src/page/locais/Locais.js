import React from 'react'
import { Box, Image } from '@skynexui/components'
import Colors from '../theme/Colors'
export default function Locais() {
  return (
    <Box
      tag="div"
      styleSheet={{
        backgroundColor: { xl: '#222' },
        color: 'orange',
        padding: '10px',
        height: '100vh',
        'flex-wrap': 'wrap',
        'justify-content': 'space-between'
      }}
    >
      <div>Pizzaria Street Food Art</div>
      <Box
        styleSheet={{
          backgroundColor: {
            xl: 'orange'
          },
          color: 'white',
          margin: '16px',
          padding: '16px'
        }}
      >
        <Image
          src="https://images.vexels.com/media/users/3/128437/isolated/lists/2dd809b7c15968cb7cc577b2cb49c84f-logotipo-de-restaurante-de-comida-de-pizza.png"
          styleSheet={{
            border: ''
          }}
        />
      </Box>

export default function Locais(){
    return(
<Box
  styleSheet={{
    backgroundColor: {
      xl: '#222'
    },
    color: 'orange',
    height: '100vw',
    padding: '16px'
  }}
>
  Locais
</Box>
    )
}