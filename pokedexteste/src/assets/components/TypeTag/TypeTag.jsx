import React from 'react';

import './TypeTag.css';

const TypeTag = ({ typeName }) => {
  return (
    <div className={`tag ${typeName}`}>
      <p className="type-name">{typeName}</p>
    </div>
  );
};
export default TypeTag;
