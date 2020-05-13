import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      id: newName,
      name: newName,
      number: newNumber,
    };

    const nameCopy = persons.find((person) => person.name === newName);

    if (nameCopy === undefined) {
      setPersons(persons.concat(personObject));
    } else {
      alert(`${newName} is already added to phonebook`);
    }

    setNewName("");
    setNewNumber("");
  };

  const namesToShow = showAll
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
      <Persons namesToShow={namesToShow} />
    </div>
  );
};

export default App;
