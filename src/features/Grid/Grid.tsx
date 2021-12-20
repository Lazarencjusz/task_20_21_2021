import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { getEmploees } from "../../store/emploees/emploees.selectors";
import "./Grid.scss";
import { EmploeeRow } from "./EmploeeRow";

export const Grid: FC = () => {
  const emploees = useSelector(getEmploees);

  const rows = useMemo(
    () =>
      emploees.map((emploee) => (
        <EmploeeRow key={emploee.id} emploee={emploee} />
      )),
    [emploees]
  );

  return (
    <div className="grid">
      <div className="table">
        <div className="container">
          <div className="header">Pracownicy</div>
          {rows}
        </div>
      </div>
    </div>
  );
};
