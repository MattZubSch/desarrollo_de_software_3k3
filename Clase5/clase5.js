const fetch = require("node-fetch");

async function fetchData() {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    if (!response.ok) {
    throw new Error(`Error en la solicitud:
   ${response.status}`);
    }
    const data = await response.json();
    // console.log(data)
    data.results.forEach(poke => {
        console.log(poke.name)
    });
    } catch (error) {
    console.error('Error al realizar la :',
   error);
    }
   }
   
   fetchData();