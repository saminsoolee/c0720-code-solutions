/* eslint-disable no-console */
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => console.log(users))
  .catch(err => console.error('Fetch failed, Sorry!', err));

fetch('https://pokeapi.co/api/v2/pokemon/cyndaquil')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Fetch failed, Sorry!', err));
