fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(data => displayCharacters(data));

function displayCharacters(characters) {
  const characterBar = document.getElementById('character-bar');
  characters.forEach(character => {
    const span = document.createElement('span');
    span.textContent = character.name;
    span.style.cursor = 'pointer';
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
    <form id="votes-form">
      <input type="number" id="votes" placeholder="Enter Votes" />
      <button type="submit">Add Votes</button>
    </form>
    <button id="reset-btn">Reset Votes</button>
  `;

 
  const form = document.getElementById('votes-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const voteInput = document.getElementById('votes');
    const votesToAdd = parseInt(voteInput.value);
    const voteCountElement = document.getElementById('vote-count');
    const currentVotes = parseInt(voteCountElement.textContent);

    if (!isNaN(votesToAdd) && votesToAdd >= 0) {
      voteCountElement.textContent = currentVotes + votesToAdd;
      voteInput.value = '';
    } else {
      alert('Please enter a valid number of votes.');
    }
  });


  const resetButton = document.getElementById('reset-btn');
  resetButton.addEventListener('click', () => {
    voteCountElement.textContent = 0;
  });
}
