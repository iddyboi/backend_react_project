import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  setCurrentContact,
  clearCurrentContact,
} from "../../redux/actions/contactActions/contactActions";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
    dispatch(clearCurrentContact());
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={`${
            type === "professional" ? "badge-success" : "badge-primary"
          } badge`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>{" "}
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i>
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn-dark btn-sm"
          onClick={() => dispatch(setCurrentContact(contact))}
        >
          Edit
        </button>

        <button className="btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
