const pokemonData = [
    {
        name: 'Bulbasaur',
        type: 'Grass Poison',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
        link: "https://www.pokemon.com/us/pokedex/bulbasaur",
    },
    {
        name: 'Charmander',
        type: 'Fire',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
        link: "https://www.pokemon.com/us/pokedex/charmander",
    },
    {
        name: 'Squirtle',
        type: 'Water',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        link: "https://www.pokemon.com/us/pokedex/squirtle",
    },
    {
        name: 'Pidgey',
        type: 'Normal Flying',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png",
        link: "https://www.pokemon.com/us/pokedex/pidgey",
    },
    {
        name: 'Rattata',
        type: 'Normal',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png",
        link: "https://www.pokemon.com/us/pokedex/rattata",
    },
    {
        name: 'Arbok',
        type: 'Poison',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png",
        link: "https://www.pokemon.com/us/pokedex/arbok",
    },
    {
        name: 'Pikachu',
        type: 'Electric',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
        link: "https://www.pokemon.com/us/pokedex/pikachu",
    },
    {
        name: 'Sandshrew',
        type: 'Ground',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png",
        link: "https://www.pokemon.com/us/pokedex/sandshrew",
    },
    {
        name: 'Poliwag',
        type: 'Water',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/060.png",
        link: "https://www.pokemon.com/us/pokedex/poliwag",
    },
    {
        name: 'Growlithe',
        type: 'Fire',
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png",
        link: "https://www.pokemon.com/us/pokedex/growlithe",
    },
];

const mainDOM = document.getElementById('main');

let mainHTML = '';

for (const data of pokemonData) {
    if (data.type === 'Fire') {
        mainHTML += `<article>
            <img src="${data.img}" alt="" />
            <p>${data.name}</p>
            <p class="fire">${data.type}</p>
            <a href="${data.link}" target="_blank">Read more</a>
    </article>`;
    } else if (data.type === 'Water') {
        mainHTML += `<article>
            <img src="${data.img}" alt="" />
            <p>${data.name}</p>
            <p class="water">${data.type}</p>
            <a href="${data.link}" target="_blank">Read more</a>
    </article>`;
    } else {
        mainHTML += `<article>
            <img src="${data.img}" alt="" />
            <p>${data.name}</p>
            <p>${data.type}</p>
            <a href="${data.link}" target="_blank">Read more</a>
    </article>`;
    }
}

mainDOM.innerHTML = mainHTML;