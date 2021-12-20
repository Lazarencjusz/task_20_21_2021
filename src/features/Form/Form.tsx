import { FC, FormEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmploee } from "../../store/emploees/emploees.actions";
import { canAddEmploee } from "../../store/emploees/emploees.selectors";
import "./Form.scss";

const FIRST_NAME_KEY = "fisrtname";
const LAST_NAME_KEY = "lastname";

export const Form: FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const firstName: string = (data.get(FIRST_NAME_KEY) as string) ?? "";
    const lastName: string = (data.get(LAST_NAME_KEY) as string) ?? "";

    if (firstName !== "" && lastName !== "") {
      setError(false);
      dispatch(
        addEmploee({
          id: Math.floor(Math.random() * (9999999 - 0)),
          firstName,
          lastName,
        })
      );
    } else {
      setError(true);
    }
  }, [dispatch]);

  const canAdd = useSelector(canAddEmploee);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor={FIRST_NAME_KEY}>First name:</label>
        <br />
        <input
          type="text"
          id={FIRST_NAME_KEY}
          name={FIRST_NAME_KEY}
          placeholder="First Name"
        />
        <br />
        <label htmlFor={LAST_NAME_KEY}>Last name:</label>
        <br />
        <input
          type="text"
          id={LAST_NAME_KEY}
          name={LAST_NAME_KEY}
          placeholder="Last Name"
        />
        <br />
        <button disabled={!canAdd} type="submit">
          Dodaj
        </button>
        <br />
        {error && <div className="error">First name and Last name fields cannot be empty</div>}
      </form>
    </div>
  );
};
