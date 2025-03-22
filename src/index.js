fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(data => displayCharacters(data));
