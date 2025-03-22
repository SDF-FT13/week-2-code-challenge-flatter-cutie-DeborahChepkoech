fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(data => displayCharacters(data));
  function displayCharacters(characters) {
    const characterBar = document.getElementById('character-bar');
    characters.forEach(character => {
      const span = document.createElement('span');
      span.textContent = character.name;
      span.addEventListener('click', () => showCharacterDetails(character));
      characterBar.appendChild(span);
    });
  }
  