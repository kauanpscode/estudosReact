import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

export default function Login() {
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
