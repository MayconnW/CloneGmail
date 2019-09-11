import styled from "styled-components";
import plus from "../../assets/png/plus.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 5px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;

  .leftSide {
    display: flex;
    align-items: center;
    padding-left: 15px;

    img {
      margin-left: 12px;
    }
  }

  .center {
    flex-grow: 2;
    display: flex;
    justify-content: flex-start;
    padding: 4px;
    padding-left: 80px;

    input {
      width: 90%;
      max-width: 720px;
      background-color: #f1f3f4;
      border: 1px solid transparent;
      border-radius: 8px;
    }
  }

  .rightSide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;

    .questionMark {
      color: #5f6368;
    }

    .moreApps {
      color: #5f6368;
    }

    > span {
      background-color: #00897b;
      text-transform: uppercase;
      border-radius: 50%;
      font-style: normal;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: 1px;
      height: 32px;
      width: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;

  .top {
    display: flex;
    flex-direction: column;
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;
export const Section = styled.div`
  display: flex;
  border: 1px solid blue;
  flex: 1;
`;

export const Nav = styled.div`
  width: 75px;
  border: 1px solid #000;
  display: flex;
`;

export const WriteButton = styled.div`
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  transition: box-shadow 0.08s linear,
    min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center left;
  background-position-x: 10px;

  border-radius: 24px;
  display: flex;
  align-items: center;
  width: 138px;
  height: 48px;
  padding-left: 50px;

  font-size: 14px;
  letter-spacing: 0.25px;
  color: #3c4043;
  font-weight: 500;

  &:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302),
      0 4px 8px 3px rgba(60, 64, 67, 0.149);
    background-color: #fafafb;
    transition: box-shadow 0.08s linear,
      min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
