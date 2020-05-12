import React, {useState} from 'react';
import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newName,
      id: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <Name key={person.id} person={person.name} /> )}
    </div>
  )

}
export default App;
