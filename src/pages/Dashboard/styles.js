import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 40px;
  position: absolute;
  min-width: 70vw;
  min-height: 70vh;
  margin: 15vh 15vw 15vh 15vw;
  border: 1px solid #7a7575;
  border-radius: 14px;
  .btn-clear {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  .input {
    background: var(--gray-dark);
    border: 2px solid var(--gray-dark);
    border-radius: 40px;
    color: #fff;
    width: 704px;
    height: 48px;
    @media screen and (max-width: 768px) {
      width: 70vw;
    }
  }
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: var(--gray-light);
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  color: var(--gray-light);
  gap: 30px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid var(--gray-light);
  border-bottom: 1px solid var(--gray-light);
  gap: 15px;
  padding: 10px;
  .avatar {
    width: 42px;
    height: 42px;
    background: var(--gray-dark);
    border-radius: 40px;
  }
  .name {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  .email {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: var(--gray-light);
  }
  .icon {
    cursor: pointer;
    display: flex;
    justify-content: end;
    width: 100%;
    margin-right: 15px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: var(--gray-light);
  margin-top: 30px;
  .total {
    color: #fff;
    margin-left: 5px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  .btn-close {
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 26px;
      height: 26px;
    }
  }
`;

export const ModalData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  min-width: 20vw;
  color: var(--gray);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  .avatar {
    border-radius: 10px;
  }
  margin-top: 20px;
`;
