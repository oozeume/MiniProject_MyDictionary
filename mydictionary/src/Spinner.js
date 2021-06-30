import React from "react";

import { faTimes, faArrowLeft, faSpinner, faPlus, faChevronUp, faCheck, faBookmark, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = (props) => {

  return (
    <div className="navibar">
      <FontAwesomeIcon icon={faSpinner} />
      <FontAwesomeIcon icon={faPlus} />
      <FontAwesomeIcon icon={faChevronUp} />
      <FontAwesomeIcon icon={faCheck} />
      <FontAwesomeIcon icon={faBookmark} />
      <FontAwesomeIcon icon={faTrashAlt} />
      <FontAwesomeIcon icon={faArrowLeft} />
      <FontAwesomeIcon icon={faTimes} />


    </div>
  );
}



export default Spinner;