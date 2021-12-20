import { combineReducers } from "@reduxjs/toolkit";
import { RootStore } from "../model/RootStore";
import { reducer as emploeesReducer } from "./emploees/emploees.reducer";

export const reducer = combineReducers<RootStore>({ workers: emploeesReducer });
