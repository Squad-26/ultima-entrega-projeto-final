import * as React from "react";
import { Box } from '@skynexui/components';
import Colors from '../theme/Colors';
import { TextField } from '@skynexui/components';
import { useFormik } from 'formik';
import { Select } from '@workday/canvas-kit-preview-react/select';
import {
  FormField,
  useFormFieldInput,
  useFormFieldModel,
} from '@workday/canvas-kit-preview-react/form-field';


export default function Contatos() {

  const formik = useFormik({
    initialValues: {
      selectedBook: '',
    },
    onSubmit: data => {
      console.log(data);
    },
  });

  const model = useFormFieldModel();
  const formFieldInputProps = useFormFieldInput(model);

  const bookList = [
    { label: 'Selecione uma opção', value: 'default' },
    { label: 'Reportar um erro', value: 'reportar um erro' },
    { label: 'Sugestões de melhorias', value: 'sugestoes' },
    { label: 'Inlusão de estabelecimento', value: 'inlusao de estabelecimento' },
    { label: 'Reclamações', value: 'Reclamacoes' },
    { label: 'Elogios', value: 'elogios' },
  ];

  return (
    <Box
      styleSheet={{
        background: `linear-gradient(to top, ${Colors.Indigo_100}, ${Colors.Indigo_500})`,
        backgroundColor: {
          xl: '#222'
        },
        width: '100vw',
        display: 'flex',
        'justify-content': 'center',
        padding: '16px',
        height: '100vh'
      }}
    >
      <Box
        styleSheet={{
          backgroundColor: {
            xl: Colors.Indigo_100
          },
          border: '0px solid blue',
          'border-radius': '20px',
          'box-shadow': `0px 2px 5px ${Colors.Indigo_200}`,
          color: Colors.Indigo_900,
          'text-align': 'left',
          margin: '16px',
          padding: '16px',
          'text-align': 'center',
          width: '60vw'
        }}
      >
        <h1>Entre em contato conosco</h1>
        <br />
        <form target="_blank" action="https://formsubmit.co/appacecidade@gmail.com" method="POST"
          enctype="multipart/form-data">
          <div class="form-group">
            <TextField
              label="Digite seu email:"
              name="contatoEmail"
              onChange={function noRefCheck() { }}
              onKeyPress={function noRefCheck() { }}
              placeholder="Digite seu email"
              rounded="md"
              styleSheet={{}}
              type="email"
              value=""
              variant="basicBordered"
              styleSheet={{
                width: '97%'
              }}
            />
          </div>
          <div class="form-group">
            <TextField
              label="Qual o assunto do contato:"
              name="contatoAssunto"
              onChange={function noRefCheck() { }}
              onKeyPress={function noRefCheck() { }}
              placeholder="Dê uma descrição breve do contato"
              rounded="md"
              styleSheet={{}}
              type="text"
              value=""
              variant="basicBordered"
              styleSheet={{
                width: '97%'
              }}
            />
          </div>
          <div class="form-group">
            <FormField orientation="vertical" alignItems="stretch">
              <FormField.Label>Selecione o tipo de contato: </FormField.Label>
              <Select
                name="selectedBook"
                rounded="md"
                options={bookList}
                onChange={event => formik.setFieldValue('selectedBook', event.currentTarget.value)}
                value={formik.values.selectedBook}
                grow
                {...formFieldInputProps}
              />
            </FormField>
          </div>

          <div class="form-group">
            <TextField
              type="textarea"
              label="Descrição:"
              maxLength={2000}
              name="descricao"
              onChange={function noRefCheck() { }}
              onKeyPress={function noRefCheck() { }}
              placeholder="Fale mais sobre o motivo do contato..."
              rounded="md"
              styleSheet={{
                width: '97%'
              }}
              value=""
              variant="basicBordered"
            />
          </div>
          <div class="form-group">
            <label for="Anexo1">Selecione um anexo</label>
            <input type="file" name="anexo" class="form-control-file" id="Anexo1" />
            <input type="hidden" name="_autoresponse"
              value="Recebemos seu e-mail e logo retornaremos ! Att equipe AceCidade." />
          </div>
          <div>
            <button class="btn btn-outline-primary mb-5" type="submit">Enviar</button>
          </div>
        </form>
      </Box>
    </Box >
  )
}