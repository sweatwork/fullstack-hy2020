import React from "react";
import personService from "../services/persons";

const Persons = ({ personsToShow, persons, setPersons }) => {
  const deletePerson = (name, id) => {
    const input = window.confirm(`Delete ${name} ?`);
    if (input) {
      personService.del(id).then((response) => {
        console.log(response);
        setPersons(
          persons.filter((person) => {
            return person.id !== id;
          })
        );
      });
    }
  };

  return personsToShow.map((person) => (
    <div key={person.id}>
      {person.name} {person.number}
      <button onClick={() => deletePerson(person.name, person.id)}>
        delete
      </button>
    </div>
  ));
};
export default Persons;
