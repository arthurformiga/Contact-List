import { useState } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

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
    {
      id: 4,
      name: "Gabriel",
      number: "55 (83) 987644211",
    },
  ]);

  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setShowInput(true);
  };

  const handleBackClick = () => {
    setShowInput(false);
  };

  const deleteContact = (id) => {
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContacts(newContact);
  };

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
    <>
      <Header
        showInput={showInput}
        handleClick={handleClick}
        handleBackClick={handleBackClick}
        addContact={addContact}
      />
      <Contacts
        search={search}
        setSearch={setSearch}
        contacts={contacts}
        deleteContact={deleteContact}
      />
    </>
  );
};

export default App;
