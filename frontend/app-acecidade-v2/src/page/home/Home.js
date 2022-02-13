import React from "react";
import { Box, Text, Image } from '@skynexui/components';
import Colors from "../theme/Colors";
import './home.style.css'
import fundo1 from '../../assets/fundo1.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'


export default function Home() {
  return (
    <>
      <Box
        tag="div"
        styleSheet={{
          backgroundColor: "white",
          backgroundImage: `url(${fundo1})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
          color: Colors.Blue_A700,
          height: '100vh',
          width: '100vw',
          padding: '5px',
          fontSize: '5rem',
          fontFamily: 'roboto',
        }}
      >
        <h1 className="texto-azul texto-sombra">Na luta por cidades mais<br /><span className="texto-laranja texto-sombra">ACESSÍVEIS</span></h1>
      </Box>
      <Box
        tag="div"
        styleSheet={{
          backgroundColor: "black",
          color: 'orange',
          height: '100vh',
          width: '100vw',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sQGsKXFIg5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </Box>
      <Box
        tag="div"
        styleSheet={{
          backgroundColor: "white",
          color: 'orange',
          height: '100vh',
          width: '100vw',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',
        }}
      >
        <Box>
          <Image src={img1}
            styleSheet={{
              width: '30rem'
            }}
          />
        </Box>
        <Text
          tag="p"
          variant="h4"
          className="texto-azul"
          styleSheet={{
            width: '600px',
            fontFamily: 'roboto',
          }}
        >
          Encontre locais que contenham acessibilidade. Encontre locais com rampas de acesso, cardápio em braile, intérprete de libras e outros tipos de acessibilidade, olhe os comentários dos usuários sobre os locais e encontre o local mais confortável para você.
        </Text>

      </Box>
      <Box
        tag="div"
        styleSheet={{
          backgroundColor: "black",
          color: 'orange',
          height: '100vh',
          width: '100vw',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <Text
          tag="p"
          variant="h4"
          className="texto-laranja"
          styleSheet={{
            width: '600px',
            fontFamily: 'roboto',
          }}
        >
          Encontre locais que contenham acessibilidade locais com rampas de acesso, cardápio em braile, intérprete de libras e outros tipos de acessibilidade, olhe os comentários dos usuários sobre os locais e encontre o local mais confortável para você.
        </Text>
        <Box>
          <Image src={img2}
            styleSheet={{
              width: '30rem'
            }}
          />
        </Box>

      </Box>
    </>
  )
}