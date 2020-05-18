import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    const eventHandler = (response) => {
      // console.log("promise fulfilled");
      setPersons(response.data);
    };

    const promise = axios.get("http://localhost:3001/persons");
    promise.then(eventHandler);
  };
  useEffect(hook, []);

  console.log("render", persons.length, "persons");

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      // id: newName,
      name: newName,
      number: newNumber,
    };

    axios
      .post("http://localhost:3001/persons", personObject)
      .then((response) => {
        console.log(response.data);

        const nameCopy = persons.find(
          (person) => person.name === response.data.name
        );
        console.log("nameCopy value", nameCopy);

        if (!nameCopy) {
          setPersons(persons.concat(response.data));
        } else {
          alert(`${response.data.name} is already added to phonebook`);
        }

        setNewName("");
        setNewNumber("");
      });
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
      );

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleSearchName = (event) => {
    setSearchName(event.target.value);
    setShowAll(false);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
