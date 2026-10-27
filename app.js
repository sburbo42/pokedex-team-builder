// Grab the elements from the page
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const result = document.getElementById("result");

// Run this when the form is submitted
form.addEventListener("submit", async (event) => {
    event.preventDefault(); // stops the page from reloading

    const name = input.value.trim().toLowerCase(); // PokeAPI needs lowercase names

    // Ask PokeAPI for that Pokemon, then wait for the answer
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json(); // turn the answer into a JavaScript object
    const types = data.types.map(t => t.type.name).join(", ");
    const stats = data.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join("");

    result.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Type: ${types}</p>
        <ul>${stats}</ul> 
    `;

});