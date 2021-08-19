import axios from 'axios';

const api = axios.create();

const list = (offset=0, limit=20) => {
  return api
    .get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
    );
}

const pokemon = (url) => {
  return api.get(url);
}

export const service = {
  list,
  pokemon
}
