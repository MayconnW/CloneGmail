import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #dadce0;
  position: relative;
  height: 55px;
  z-index: 1;

  input:focus {
    border: 2px solid #1a73e8;
    border-radius: 4px;
  }

  input {
    border: none;
    color: #202124;
    font-size: 16px;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 10px;
    z-index: 2;
  }

  label {
    font-size: 16px;
    position: absolute;
    top: 25%;
    left: 5px;
    z-index: 3;
    background: #fff;
    transition: all 0.2s;
    padding-left: 10px;
    color: #80868b;
    cursor: text;
  }

  input:focus + label {
    top: -20%;
    z-index: 2;
    padding: 0 7px;
    font-size: 12px;
    transition: all 0.2s;
  }

  input:valid + label {
    top: -20%;
    z-index: 2;
    padding: 0 7px;
    font-size: 12px;
    transition: all 0.2s;
  }
`;
