import { FC } from "react";
import { ComponentC } from "../ComponentC";
import { ComponentF } from "../../features/ComponentF";
import "./ComponentB.scss";

export const ComponentB: FC = () => {
  return (
    <div className="component-b">
      <ComponentC />
      <ComponentF />
    </div>
  );
};
