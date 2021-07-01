import React from 'react';
import styled from 'styled-components'; 

const Modal = (props) => {

  return (
    <div>
      <ModalBox className={props.switchModal ? "hideLogin": "Login"}>
        <span style={{
          fontWeight: "700",
          fontSize: "21px",
          marginBottom: "10px"
        }} >Check !</span>
        <span style={{
          marginBottom: "25px"
        }} >Please enter both the
            <br />
        <b>Word</b> and <b>Discription</b>.</span>
        <ConfirmBtn>Confirm</ConfirmBtn>
      </ModalBox>
    </div>
  );
}

const ModalBox = styled.div`
width: 220px;
height: 245px;
border-radius: 22px;
background-color: #F5F5F5;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
`;

const ConfirmBtn = styled.button`
width: 125px;
height: 38px;
border-radius: 240px;
background-color: #3040C4;
border-style: none;
color: #fff;
font-weight: 700;
font-size: 15px;
`;

export default Modal;