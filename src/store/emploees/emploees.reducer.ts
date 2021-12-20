import { createReducer } from "@reduxjs/toolkit";
import { Emploee } from "../../model/Emploee";
import { addEmploee, removeEmploee } from "./emploees.actions";

export interface InitialState {
  persons: Emploee[];
}

export const initialState: InitialState = {
  persons: [{ id: 1, firstName: "Jan", lastName: "Kowalski" }],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmploee, (state, action) => {
    state.persons = state.persons.concat(action.payload);
  });
  builder.addCase(removeEmploee, (state, action) => {
    state.persons = state.persons.filter(
      (emploee) => emploee.id !== action.payload
    );
  });
});
