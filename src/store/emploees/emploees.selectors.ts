import { createSelector } from "@reduxjs/toolkit";
import { Emploee } from "../../model/Emploee";
import { RootStore } from "../../model/RootStore";

export const getEmploees = (state: RootStore): Emploee[] =>
  state.workers.persons;

export const canAddEmploee = createSelector(
  [getEmploees],
  (emploees) => emploees.length < 5
);
