import React, { useState } from "react";
import Person from './components/Person'

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas", number: '555-141567' }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("")

  const isDuplicated = (name) => {
    return persons.some(person => person.name === name)
  }
  
  const addContact = (event) => {
    event.preventDefault()

    if (isDuplicated(newName)) {
      alert(`${newName} is already in the Phonebook`)
      return
    }
    
    const newContact = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newContact))
    setNewName('')
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addContact} >
				<div>
					name: <input value={newName} onChange={handleChangeName} />
				</div>
        <div>number: <input value={newNumber} onChange={handleChangeNumber}/></div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => {
        return <Person key={person.name} person={person} />
      })}
		</div>
	);
};

export default App;