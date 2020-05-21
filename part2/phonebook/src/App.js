import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      if (initialPersons !== "Network Error") {
        setPersons(initialPersons);
      } else {
        alert(`${initialPersons}`);
      }
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const duplicatePerson = persons.find(
      (person) => person.name === personObject.name
    );

    if (!duplicatePerson) {
      personService.create(personObject).then((returnedPerson) => {
        setDisplayMessage(`Added ${returnedPerson.name}`);
        setTimeout(() => {
          setDisplayMessage(null);
        }, 2000);
        setPersons(persons.concat(returnedPerson));
      });
    } else {
      const userResponse = window.confirm(
        `${personObject.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (userResponse) {
        const person = persons.find(
          (person) => person.id === duplicatePerson.id
        );
        const changedPerson = { ...person, number: personObject.number };
        personService
          .update(changedPerson.id, changedPerson)
          .then((response) => {
            if (response !== 404) {
              setDisplayMessage(`Updated ${changedPerson.name}`);
              setTimeout(() => {
                setDisplayMessage(null);
              }, 3000);
              setPersons(
                persons.map((person) =>
                  person.id !== changedPerson.id ? person : response
                )
              );
            } else {
              setErrorMessage(
                `${changedPerson.name} has already been removed from server`
              );
              setTimeout(() => {
                setErrorMessage(null);
              }, 3000);

              setPersons(
                persons.filter((person) => person.id !== changedPerson.id)
              );
            }
          });
      }
    }

    setNewName("");
    setNewNumber("");
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
  // console.log("personsToShow", personsToShow)
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={displayMessage} />
      <ErrorNotification error={errorMessage} />
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
      <Persons
        personsToShow={personsToShow}
        persons={persons}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
