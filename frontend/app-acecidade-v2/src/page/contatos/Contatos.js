import * as React from "react";
import Colors from '../theme/Colors';
import { TextField, Box, Button } from '@skynexui/components';
import Select, { SelectOption } from '@workday/canvas-kit-react-select';
import { FormField } from '@workday/canvas-kit-preview-react/form-field';

export default function Contatos() {
  
  // Responsável pelo select 
  const [formSelect, onChangeSelect] = React.useState('default');

  const handleChange = event => {
    onChangeSelect(event.currentTarget.value);
  };
  
  // Fim select

 // Resto do form alterar os dados nos inputs
  const [emailForm, onChangeEmail] = React.useState("");
  const [assuntoForm, onChangeAssunto] = React.useState("");
  const [descricaoForm, onChangeDescricao] = React.useState("");

  return (
    <Box
      styleSheet={{
        background: 'linear-gradient(to bottom, ${Colors.Background_1}, ${Colors.Background_2})',
        backgroundColor: {
          xl: '#222'
        },
        width: '100%',
        display: 'flex',
        'justify-content': 'center',
        height: '100%'
      }}
    >
      <Box
        styleSheet={{
          background: `linear-gradient(to bottom, ${Colors.Indigo_100}, ${Colors.Indigo_50})`,
          backgroundColor: {
            xl: Colors.Indigo_100
          },
          border: '0px solid blue',
          'border-radius': '20px',
          'box-shadow': `0px 2px 5px ${Colors.Indigo_200}`,
          'text-align': 'left',
          margin: '16px',
          padding: '16px',
          width: '60vw'
        }}
      >
        <h1>Entre em contato conosco</h1>
        <br />
        <form target="_blank" action="https://formsubmit.co/appacecidade@gmail.com" method="POST"
          enctype="multipart/form-data">
          <div className="form-group">
            <TextField
              label="Digite seu email:"
              name="contatoEmail"
              onChangeText={onChangeEmail}
              placeholder="Digite seu email"
              rounded="md"
              styleSheet={{}}
              type="email"
              value={emailForm}
              variant="basicBordered"
              styleSheet={{
                width: '97%'
              }}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Qual o assunto do contato:"
              name="contatoAssunto"
              onChangeText={onChangeAssunto}
              placeholder="Dê uma descrição breve do contato"
              rounded="md"
              styleSheet={{}}
              type="text"
              value={assuntoForm}
              variant="basicBordered"
              styleSheet={{
                width: '97%'
              }}
            />
          </div>
          <div className="form-group">
            <FormField inputId="formContatoSelect" grow={true}>
              <FormField.Label>Selecione o tipo de contato: </FormField.Label>
              <Select name="contatoSelect" onChange={handleChange} value={formSelect}>
                <SelectOption label="Selecione uma opção" value="default" />
                <SelectOption label="Reportar um erro" value="reportar um erro" />
                <SelectOption label="Sugestões de melhorias" value="sugestoes" />
                <SelectOption label="Inlusão de estabelecimento" value="inlusao de estabelecimento" />
                <SelectOption label="Reclamações" value="reclamacoes" />
                <SelectOption label="Elogios" value="elogios" />
              </Select>
            </FormField>
          </div>
          <div className="form-group">
            <TextField
              type="textarea"
              label="Descrição:"
              name="contatoDescricao"
              onChangeText={onChangeDescricao}
              placeholder="Fale mais sobre o motivo do contato..."
              rounded="md"
              styleSheet={{
                width: '97%',
                margin: '1em 0px' 
              }}
              value={descricaoForm}
              variant="basicBordered"
            />
          </div>
          <div className="form-group">
            <label for="Anexo1">Selecione um anexo</label>
            <input type="file" name="anexo" className="form-control-file" id="Anexo1" />
            <input type="hidden" name="_autoresponse"
              value="Recebemos seu e-mail e logo retornaremos ! Att equipe AceCidade." />
          </div>
          <div>
            <Button
              label="Enviar"
              rounded="md"
              type="submit"
              styleSheet={{
                width: '100%',
                margin: '1em 0px',
              }}
            />
          </div>
        </form>
      </Box>
    </Box >
  )
}