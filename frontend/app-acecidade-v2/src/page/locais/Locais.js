import React from 'react'
import { Box } from '@skynexui/components'
import CardRestaurantes from './CardLocais'
import Filtro from './Filtro'

export default function Locais() {
  return (
    <Box styleSheet={{ display: 'flex' }}>
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
        <Filtro/>
        
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
        <CardRestaurantes
          nomeRestaurante="Museu de Arte de São Paulo Assis Chateaubriand"
          descrRest ='O Museu de Arte de São Paulo Assis Chateaubriand ou popularmente conhecido como MASP é uma das instituições culturais mais importantes do Brasil.
          Localizado no coração de São Paulo, é símbolo da capital paulista e referência arquitetônica.
          Fundado em 1947, o museu possui um acervo de 10 mil obras, porém nem todas já foram expostas no MASP, como uma armadura de cobre e aço de 1480.'
          imgSRC="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/myczgrokchkt5cb54m0s "
        />

        <CardRestaurantes
          nomeRestaurante="Burguer King"
          descrRest ='Burger King, muitas vezes abreviado como BK, é uma rede de restaurantes especializada em fast-food, fundada nos Estados Unidos por James McLamore e David Edgerton, que abriram a primeira unidade em Miami, Flórida.'
          imgSRC="https://logospng.org/download/burger-king/logo-burger-king-2021-256.png"
        />
        <CardRestaurantes
          nomeRestaurante="Toca da Cancela"
          descrRest = 'Restaurante de comida caseira tradicional situado na região central da cidade oferecendo delivery e atendimento no local sempre com comida fresca .'
          imgSRC="https://tocadacancela.pedzap.com.br/uploads/modules/estabelecimentos/1576_webapp_logomarca_256.png"
        />
      
        <CardRestaurantes
          nomeRestaurante="Novo Bar"
          descrRest ='Petiscos e drinks, os melhores chefs e atendimento especial a todos os clientes.'
          imgSRC="https://tecnologia.systa.com.br/midias/pessoas/24558/20200210162808-guia-estadual--thumb.jpeg"
        />

        <CardRestaurantes
          nomeRestaurante="Fit On Me"
          descrRest ='Saladas, falafels e muito tempero natural, sempre balancedo e apetitoso.'
          imgSRC="https://files.menudino.com/cardapios/18731/logo.png"
        />

      </Box>
    </Box>
  )
}