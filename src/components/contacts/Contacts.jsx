import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filtered = useSelector((state) => state.contacts.filtered);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <div>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </div>
  );
};

export default Contacts;
