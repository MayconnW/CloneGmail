import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  border: 1px solid #dadce0;
  border-radius: 8px;
  width: 450px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;

  .headerText {
    color: #202124;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin-top: 10px;
      font-weight: 400;
      font-size: 24px;
    }
    h3 {
      margin-top: 4px;
      font-weight: 400;
      font-size: 16px;
    }
  }

  .centerBox {
    display: flex;
    flex-direction: column;
    width: 370px;
  }

  > span {
    color: #5f6368;
    font-size: 14px;
    line-height: 1.43;
    white-space: normal;
  }

  .footerActions {
    display: flex;
    justify-content: space-between;
    a {
      font-weight: 400;
    }
  }
`;

export const Link = styled.a`
  color: #1a73e8;
  font-weight: 500;
  letter-spacing: 0.25px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  margin-top: 6px;
`;

export const Button = styled.div`
  background-color: #1a73e8;
  color: #fff;
  border-radius: 4px;
  line-height: 20px;
  width: 92px;
  height: 36px;
  font-weight: 500;
  letter-spacing: 0.25px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  margin-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #287ae6;
  }
  &:active {
    transition: all 0.2s ease-out;
    background-color: #3367d6;
  }
`;

export const BoxEmail = styled.h3`
  border: none;
  border-radius: 20px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  width: fit-content;
  text-align: center;
  padding: 4px;
  padding-right: 25px;
  position: relative;

  i {
    background-color: #00897b;
    border-radius: 50%;
    font-style: normal;
    color: #fff;
    padding: 4px 6px;
    font-size: 12px;
    margin-right: 6px;
  }

  svg {
    position: absolute;
    top: 6px;
  }
`;
