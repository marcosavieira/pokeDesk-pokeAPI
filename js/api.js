const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 10000,
  headers: { 'Content-Type': 'Application/json' }
});