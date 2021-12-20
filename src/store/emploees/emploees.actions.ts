import { ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";
import { Emploee } from "../../model/Emploee";

const PREFIX = "EMPLOEES";

export const addEmploee: ActionCreatorWithPayload<Emploee> = createAction(
  `${PREFIX}_ADD_EMPLOEE`
);

export const removeEmploee: ActionCreatorWithPayload<number> = createAction(
  `${PREFIX}_REMOVE_EMPLOEE`
);
