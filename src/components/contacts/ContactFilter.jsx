import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterContacts,
  clearFilter,
} from "../../redux/actions/contactActions/contactActions";

const ContactFilter = () => {
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const filtered = useSelector((state) => state.contacts.filtered);
  const disptach = useDispatch();
  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      disptach(filterContacts(e.target.value));
    } else {
      disptach(clearFilter());
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts"
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
