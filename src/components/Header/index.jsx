import { GoPlus } from "react-icons/go";
import { useState } from "react";

import styles from './header.module.css'

const Header = ({ showInput, handleClick, handleBackClick, addContact }) => {
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputName("");
    setInputNumber("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
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
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.addInput}>
            <input
              placeholder='Nome'
              type='text'
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <input
              placeholder='Telefone'
              type='text'
              value={inputNumber}
              onChange={(e) => setInputNumber(e.target.value)}
            /> 
            </div>
            <div className={styles.buttonArea}>
              <button
                disabled={inputName === "" || inputNumber === ""}
                onClick={() => addContact(inputName, inputNumber)}
                type='submit'
              >
                Salvar
              </button>
              <button type='button' onClick={() => handleBackClick()}>
                Voltar
              </button>
            </div>
           
          </form>
        )}
      </div>
    </div>
  );
};

export default Header;
