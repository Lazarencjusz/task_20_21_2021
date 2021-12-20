import { FC } from "react";
import { Form } from "../Form";
import { Grid } from "../Grid";
import "./ComponentF.scss";

export const ComponentF: FC = () => {
  return (
    <div className="component-f">
      <Grid />
      <Form />
    </div>
  );
};
