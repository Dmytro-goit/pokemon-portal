import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonState {
  list: PokemonListItem[];
}

const initialState: PokemonState = {
  list: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<PokemonListItem[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setPokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer;
