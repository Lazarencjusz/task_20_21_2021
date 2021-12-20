import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Emploee } from "../../model/Emploee";
import { removeEmploee } from "../../store/emploees/emploees.actions";

export interface Props {
  emploee: Emploee;
}

export const EmploeeRow: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(removeEmploee(props.emploee.id));
  }, [dispatch, props.emploee.id]);

  return (
    <>
      <div>{props.emploee.firstName}</div>
      <div>{props.emploee.lastName}</div>
      <div>
        <button onClick={handleClick}>Usuń</button>
      </div>
    </>
  );
};
