import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import googleLogo from "../../assets/svg/google.svg";

import { Container, Content, Box, Link, Button, BoxEmail } from "./style";
import Input from "../../components/Input";

export default function Login() {
  const [mailInput, setMailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [account, setAccount] = useState({
    email: "",
    name: "",
    initial: "",
    hasAccount: false
  });

  function handleNext() {
    if (mailInput === "") {
      return;
    }
    setAccount({
      email: mailInput,
      name: mailInput,
      initial: "M",
      hasAccount: true
    });
  }

  return (
    <Container>
      <Box>
        <Content>
          <div className="headerText">
            <img src={googleLogo} alt="Google Logo" />
            <h2>{account.hasAccount ? account.name : "Login"}</h2>
            {account.hasAccount ? (
              <BoxEmail>
                <i>{account.initial}</i>
                {account.email}
                <MdKeyboardArrowDown size={22} />
              </BoxEmail>
            ) : (
              <h3>Ir para o Gmail</h3>
            )}
          </div>
          <div className="centerBox">
            {account.hasAccount ? (
              <Input
                label="Digite sua senha"
                type="password"
                required="true"
                onChange={setPasswordInput}
              />
            ) : (
              <Input
                label="E-mail ou telefone"
                type="email"
                required="true"
                onChange={setMailInput}
              />
            )}
            <Link href="#">Esqueceu seu e-mail?</Link>
          </div>
          <span>
            Não está no seu computador? Use o modo visitante para fazer o login
            com privacidade. <Link href="#">Saiba mais</Link>
          </span>
          <div className="footerActions">
            <Link href="#">Criar conta</Link>
            <Button onClick={handleNext}>Próxima</Button>
          </div>
        </Content>
      </Box>
    </Container>
  );
}
