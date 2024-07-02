import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            onChange={(e) => setTime(e.target.value)}
            value={time}
            id="time"
            type="time"
            className="form-control"
            placeholder="Enter your appoinment time"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            min={getTodayString()}
            name={date}
            id="date"
            type="date"
            className="form-control"
            placeholder="Enter your appointment date"
          />
        </div>
        <label>
          <ContactPicker
            name="contact"
            value={contact}
            contacts={contacts}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
