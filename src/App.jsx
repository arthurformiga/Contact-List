import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Matheus",
      number: "55 (83) 912345678",
    },
    {
      id: 2,
      name: "Eduarda",
      number: "55 (83) 912345679",
    },
    {
      id: 3,
      name: "Leonardo",
      number: "55 (83) 987654321",
    },
  ]);

  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setShowInput(true);
  };

  const handleBackClick = () => {
    setShowInput(false);
  }

  const deleteContact = (id) => {
    const newContact = contacts.filter((contact) => (contact.id !== id ? id : null))
    setContacts(newContact);
  }

  const addContact = (name, number) => {
    const newContact = [
      ...contacts,
      {
        id: Math.floor(Math.random() * 1000),
        name,
        number,
      },
    ];
    setContacts(newContact);
  };

  return (
    <div className='app'>
      <Header
        deleteContact={deleteContact}
        handleBackClick={handleBackClick}
        setSearch={setSearch}
        search={search}
        showInput={showInput}
        handleClick={handleClick}
        addContact={addContact}
        contacts={contacts}
      />
    </div>
  );
};

export default App;
