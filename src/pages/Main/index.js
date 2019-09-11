import React, { useState } from "react";
import { MdMenu, MdApps } from "react-icons/md";
import logo from "../../assets/png/logo.png";
import questionMark from "../../assets/svg/question.svg";
import {
  Container,
  Header,
  Content,
  Aside,
  Section,
  Nav,
  WriteButton
} from "./style";

function App() {
  const [account, setAccount] = useState({
    initial: "M"
  });
  return (
    <Container>
      <Header>
        <div className="leftSide">
          <MdMenu size={24} />
          <img src={logo} alt="Logo Gmail" />
        </div>
        <div className="center">
          <input type="text" placeholder="Pesquisar e-mail" />
        </div>
        <div className="rightSide">
          <img
            className="questionMark"
            src={questionMark}
            alt="Question mark"
          />
          <MdApps className="moreApps" size={24} />
          <span>{account.initial}</span>
        </div>
      </Header>
      <Content>
        <Aside>
          <div className="top">
            <WriteButton>Escrever</WriteButton>
          </div>
          <div className="bottom">
            <img src={questionMark} alt="Question mark" />
            <img src={questionMark} alt="Question mark" />
            <img src={questionMark} alt="Question mark" />
          </div>
        </Aside>
        <Section>Meio</Section>
        <Nav>Icones</Nav>
      </Content>
    </Container>
  );
}

export default App;
