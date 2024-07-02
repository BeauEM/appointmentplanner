import React from "react";

export const ContactPicker = ({ onChange, value, name, contacts }) => {
  return (
    <>
      <select
        className="select"
        name={name}
        onChange={onChange}
        value={value}
        contacts={contacts}
      >
        {console.log(contacts)}
        <option value={""}>No contact selected</option>
        {contacts.map((contact, index) => {
          return (
            <option key={index} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
