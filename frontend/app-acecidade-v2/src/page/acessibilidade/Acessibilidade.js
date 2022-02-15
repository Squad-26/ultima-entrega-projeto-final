import React from "react";
import "./Acessibilidade.css";
//import { Box } from '@skynexui/components';

export default function Acessibilidade () {
  return (
    <>
      <div className="h1">
        <h1> Acessibilidade </h1>{" "}
      </div>{" "}
      <div className="content">
        <p>
          O site foi desenvolvido com o objetivo de ser acessível para todos.Por
          isso tem recursos de acessibilidade implementados de acordo com as
          recomendações do WCAG(Web Content Accessibility Guidelines) e das
          diretrizes de acessibilidade para conteúdo web nível AA + , do
          W3C(World Wide Web Consortium), principal instituição de padronização
          da internet.Dessa forma, pessoas com deficiência auditiva, visual,
          limitações cognitivas, mobilidade reduzida, dificuldade de
          aprendizagem, fotossensibilidade e com combinações destas
          características podem navegar no site usando esses diversos recursos,
          como o alto contraste, teclas de atalho, navegação por teclado, dentre
          outros.A acessibilidade do site é melhor nas versões mais atualizadas
          dos navegadores web, por isso utilize sempre a versão mais recente do
          seu software.{" "}
        </p>{" "}
        <div className="h2">
          <h2> Dicas de Navegação </h2>{" "}
        </div>{" "}
        <h3> Como aumentar e diminuir o texto </h3>{" "}
        <p>
          Esse site permite o uso eficiente dos recursos de zoom nativo do seu
          navegador.Para aumentar a fonte e ampliar o conteúdo pressione as
          teclas“ Ctrl + ”, use“ Ctrl–” para diminuir e pressione“ Ctrl 0” para
          voltar ao padrão{" "}
        </p>{" "}
        <h3> Navegação por tabulação </h3>{" "}
        <p>
          {" "}
          Utilize a tecla“ Tab” para navegar pelos elementos acionáveis do
          site(links, botões, campos de formulário e outros), na ordem em que
          eles estão posicionados na página.Use“ Shift + Tab” para retornar ao
          início e as setas direcionais para acessar às informações textuais.{" "}
        </p>{" "}
        <h3> Contato de Suporte </h3>{" "}
        <p>
          {" "}
          Caso encontre algum obstáculo de acessibilidade nas páginas, fique à
          vontade para entrar em contato e especificar as dificuldades através
          do e - mail www.acecidade.com.br {" "}
        </p>{" "}
        <div className="h2">
          <h2> Tecnologias assistivas </h2>{" "}
        </div>{" "}
        <p> Sugestões de programas para pessoas com deficiência: </p>{" "}
        <h3> Softwares para Deficiência Visual </h3>{" "}
        <div>
          <ul>
            <li>
              {" "}
              <a href="http://intervox.nce.ufrj.br/dosvox/"> DOSVOX: </a>{" "}
              sistema computacional baseado na síntese de voz desenvolvido para
              portadores de deficiência visual(Windows ou Linux);{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="https://nitrous-voice-flux.br.jaleco.com/">
                {" "}
                Nitrous Voice Flux:{" "}
              </a>
              programa gratuito de controle de computador por voz;{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="https://sourceforge.net/projects/nvda/files/releases/2013.1beta2/nvda_2013.1beta2.exe/download">
                {" "}
                NVDA:{" "}
              </a>
              software livre e gratuito de leitura de tela disponível em vários
              idiomas(Windows){" "}
            </li>{" "}
            <li>
              {" "}
              <a href="https://www.freedomscientific.com/products/software/jaws/">
                {" "}
                Jaws for Windows:{" "}
              </a>
              leitor de tela disponível em vários idiomas;{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="https://www.virtualvision.com.br/"> Virtual Vision: </a>
              leitor de tela em português(Windows);{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="https://download.cnet.com/YeoSoft-Text-to-MP3-Speaker/3000-2279_4-10282189.html">
                {" "}
                YeoSoft Text:{" "}
              </a>
              leitor de tela em inglês e português.{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <p>
          Observação: leia no manual do leitor de telas sobre a melhor forma de
          navegação em páginas web.{" "}
        </p>{" "}
        <h3> Softwares para Deficiência Auditiva </h3>{" "}
        <div>
          <ul>
            <li>
              {" "}
              <a href="https://www.handtalk.me/br/aplicativo">Handtalk: </a>aplicativo de
              tradução automática para a Língua Brasileira de Sinais(LIBRAS) que
              faz tradução do conteúdo de textos ou áudios no seu celular.{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
