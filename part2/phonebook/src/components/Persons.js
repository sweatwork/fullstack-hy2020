import React from "react";

const Persons = ({ namesToShow }) => {
  return namesToShow.map((person) => (
    <div>
      {person.name} {person.number}
    </div>
  ));
};

export default Persons;
