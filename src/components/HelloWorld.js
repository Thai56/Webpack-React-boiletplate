import React from 'react';

const HelloWorld = ({ text = '' }) => {
  return (
    <h1>{text}</h1>
  );
};

export default HelloWorld;
