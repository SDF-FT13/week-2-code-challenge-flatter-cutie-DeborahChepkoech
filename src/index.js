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
  function showCharacterDetails(character) {
    const detailedInfo = document.getElementById('detailed-info');
    detailedInfo.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>Votes: <span id="vote-count">${character.votes}</span></p>
    `;
  }
    