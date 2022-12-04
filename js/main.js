const containerPokemom = document.querySelector(".container-div");
const btnReload = document.querySelector(".buttonReload");
const body = document.querySelector("body");
const imgPoke = document.querySelector("img");

const form = document.querySelector("form");
const input = document.querySelector("form input");
const button = document.querySelector("form button");
let pokemomName = "";
let pokeName = "";

button.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  pokemomName = input.value;
  loadData();
  loadPokemonData();
});



async function loadData() {
  try {
    const response = await api.get(pokemomName);
    if (response.status === 200) {
      console.log(response);
      pokeName = response.data.name;
      pokeImg = response.data.sprites.front_default;

      const poke = document.querySelector(".nome");
      poke.textContent = pokeName;
      document.querySelector(".imgP").src = pokeImg;
      
    }
  } catch (error) {
    console.log(error.response.data);
    alert("Pokemom não encontrado");
    document.location.reload(true);
  }
}

function loadPokemonData() {
  const div = document.createElement("div");
  div.className = "container-div";
  const nome = document.createElement("h1");
  nome.className = "nome";
  const imgP = document.createElement("img");
  imgP.className = "imgP";
  imgP.src = ''
  const buttonReload = document.createElement("button");
  buttonReload.className = "buttonReload";
  buttonReload.type = "button";

  body.appendChild(div);
  div.appendChild(nome);
  div.appendChild(imgP);
  div.appendChild(buttonReload);

  buttonReload.textContent = "Recarregar";
  buttonReload.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    document.location.reload(true);
  })
 
}

