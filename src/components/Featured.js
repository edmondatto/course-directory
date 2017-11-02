import React from 'react';

const Featured = ({match}) => {
  let name = `${match.params.fname} ${match.params.lname}`;
  let courses = match.params.courses;
  return (
    <div className="main-content">
      <h2> {name} </h2>
      <p>Introducing <strong> {name} </strong>, a teacher who loves teaching courses about <strong>{courses}</strong>!</p>
    </div>
  );
};

export default Featured;