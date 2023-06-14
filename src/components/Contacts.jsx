import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";

const Contacts = ({ contacts, search, setSearch, deleteContact }) => {
  return (
    <>
      <div className='input-area'>
        <FiSearch size={18} color='#212121' className='icon' />
        <input
          type='text'
          placeholder='Pesquisar'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='contacts'>
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((items) => (
            <div className='contact-list' key={items.id}>
              <FaUserCircle size={40} />
              <p>{items.name}</p>
              <p>+{items.number}</p>
              <div className='delete-container'>
                <RiDeleteBin7Fill
                  onClick={() => deleteContact(items.id)}
                  color='#212121'
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Contacts;
