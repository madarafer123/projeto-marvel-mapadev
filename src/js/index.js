// Selects all elements with the "personagem" class
const personagens = document.querySelectorAll(".personagem");

// Adds a 'mouseenter' event listener to each character element
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    // Gets the ID of the hovered character
    const idSelecionado = personagem.attributes.id.value;

    // Checks if the selected character is "Ultron" and exits if true (Ultron is reserved for Player 2)
    if (idSelecionado === "ultron") return;

    // Finds the currently selected character in the list
    const personagemSelecionado = document.querySelector(".selecionado");
    // Removes the "selecionado" class to unhighlight the previously selected character
    personagemSelecionado.classList.remove("selecionado");

    // Adds the "selecionado" class to highlight the newly hovered character
    personagem.classList.add("selecionado");

    // Updates the main Player 1 character image to match the selected character's ID
    const imagemJogador1 = document.getElementById("personagem-jogador-1");
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    // Updates Player 1's character name display to match the selected character's data-name attribute
    const nomejogador1 = document.getElementById("nome-jogador-1");
    const nomeSelecionado = personagem.getAttribute("data-name");

    // Sets Player 1's character name display to the selected character's name
    nomejogador1.innerHTML = nomeSelecionado;
  });
});
