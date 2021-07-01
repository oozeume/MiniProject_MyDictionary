import React from "react";
import styled from 'styled-components';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = (props) => {

  return (
    <Outter>
      <ElementBox>
      <FontAwesomeIcon icon={faSpinner} color="#3040C4" size="3x" spin={true} />
      </ElementBox>
    </Outter>
  );
}

const ElementBox = styled.div`
height: 45px;
width: 45px;
`;

const Outter = styled.div`
height: 600px;
max-height: 60vh;
max-width: 350px;

margin: auto auto;
display: flex;
align-items: center;
justify-content: center;
`;

export default Spinner;