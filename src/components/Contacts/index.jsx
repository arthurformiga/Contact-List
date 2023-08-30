import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";

import styles from "./contacts.module.css";

const Contacts = ({ search, setSearch, contacts, deleteContact }) => {
  return (
    <>
      <div className={styles.inputAreaContacts}>
        <input
          type='text'
          placeholder='Pesquisar'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FiSearch size={18} color='#929292' className={styles.icon} />
      </div>
      <div className={styles.contacts}>
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((items) => (
            <div className={styles.contactList} key={items.id}>
              <FaUserCircle size={40} />
              <p>{items.name}</p>
              <p>+{items.number}</p>
              <div className={styles.deleteContainer}>
                <RiDeleteBin7Fill
                  onClick={() => deleteContact(items.id)}
                  className={styles.deleteButton}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Contacts;
