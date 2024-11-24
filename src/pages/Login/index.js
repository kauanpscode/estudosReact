import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

import axios from '../../services/axios'

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos')
      console.log(response)
    }

    getData();
  }, [])

  return (
    <Container>
      <Title>
        Login
        <small>Chama</small>
      </Title>
      <Paragrafo>Lorem ipasum dolor sit amet.</Paragrafo>
      <button type="button">Salvar</button>
    </Container>
  );
}
