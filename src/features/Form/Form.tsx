import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { canAddEmploee } from "../../store/emploees/emploees.selectors";
import "./Form.scss";

export const Form: FC = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log(event);
  }, []);

  const canAdd = useSelector(canAddEmploee);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
        <br />
        <label htmlFor="LastName">Last name:</label>
        <br />
        <input
          type="text"
          id="LastName"
          name="LastName"
          placeholder="Last Name"
        />
        <br />
        <button disabled={!canAdd} type="submit">Dodaj</button>
      </form>
    </div>
  );
};
