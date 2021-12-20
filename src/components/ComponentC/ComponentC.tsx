import { FC } from "react";
import { ComponentE } from "../ComponentE";
import "./ComponentC.scss";

export const ComponentC: FC = () => {
  return (
    <div className="component-c">
      <ComponentE />
    </div>
  );
};
