import { LOGIN_SUCCESS, REGISTER_SUCCESS,POKEMON_SUCCESS } from './types';
import axios from "axios";

export const LoginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload: payload
});

export const RegisterSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload: payload
});

export const PokemonSuccess = payload => ({
  type: POKEMON_SUCCESS,
  payload: payload
});

export function pokemonSuccess() {
  return async dispatch => { 
    await axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(async response => {
      dispatch(PokemonSuccess(response.data.results))
    })
    return getPokemon
  }
}
