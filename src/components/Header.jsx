import { GoPlus } from "react-icons/go";
import Contacts from "./Contacts";
import { useState } from "react";

const Header = ({ contacts, addContact, handleClick, showInput, handleBackClick, search, setSearch }) => {
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputName("");
    setInputNumber("");
  };
  return (
    <div className='container'>
      <div className='header-container'>
        {!showInput ? (
          <>
            <h2>Meus contatos</h2>
            <GoPlus
              onClick={() => handleClick()}
              size={25}
              color='#212121'
              style={{ cursor: "pointer" }}
            />
          </>
        ) : (
          <form onSubmit={handleSubmit} className='add-input'>
            <input
              placeholder='Nome'
              type='text'
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <input
              placeholder='Adicionar telefone'
              type='text'
              value={inputNumber}
              onChange={(e) => setInputNumber(e.target.value)}
            />
            <div>
              <button disabled={inputName === "" || inputNumber ===""}
                onClick={() => addContact(inputName, inputNumber)}
                type='submit'
              >
                Salvar
              </button>
              <button type="button" onClick={() => handleBackClick()}>Voltar</button>
            </div>
          </form>
        )}
      </div>

      <Contacts search={search} setSearch={setSearch} contacts={contacts} />
    </div>
  );
};

export default Header;
