function changePageTitle(title) {
    document.title = title
  }
  
  function generateInfoSection(imageLinks, pokemonName) {
    let currentIndex = 0;
    const h2 = document.createElement('h2')
    h2.id = "info-pokemon-label"
    h2.textContent = `Informações sobre ${pokemonName}`
  
    const img = document.createElement('img')
    img.src = imageLinks[0]
    img.alt = `Imagem do pokemon ${pokemonName}`

    img.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % imageLinks.length;
      img.src = imageLinks[currentIndex];
  });
    const section = document.querySelector('#info-pokemon')
  
    section.appendChild(h2)
    section.appendChild(img)

    
  }
  
  async function getPokemonData(name) {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  
      const jsonData = await data.json()

      const spritesArray = Object.values(jsonData.sprites)
  
      const imageLinks = spritesArray.filter(item => typeof item === 'string');
      generateInfoSection(imageLinks, name);


      const header = document.getElementById('header');
      header.querySelector('h1').textContent = name.charAt(0).toUpperCase() + name.slice(1);

    } catch (error) {
      console.error(error)
    }
  }
  
  function getSearchParams() {

    if (!location.search) {
      return
    }

    const urlSearchParams = new URLSearchParams(location.search)
  

    const pokemonName = urlSearchParams.get('name')
  
    changePageTitle(`Pagina do ${pokemonName}`)
    getPokemonData(pokemonName)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
  })