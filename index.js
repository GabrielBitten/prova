async function getEstadoData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getEstadoDetalhes(estadoUrl) {
    const response = await fetch(estadoUrl);
    const data = await response.json();
    const EstadoDetalhes = {
        nome: data.nome

    };
    return EstadoDetalhes;
}

  async function getEstadosData(){

        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);

        const data = await response.json();
    
        const estadoUrls = data.mapasdas(result => result.url);
        
        const promises = estadoUrls.map(getEstadoDetalhes);
    
        const EstadoDetalhes = await Promise.all(promises);
        return EstadoDetalhes;



  }


  
async function apresentaEstados(){
    const EstadoDetalhes = await getEstadosData();

    const estadoSection = document.getElementById('estados');


    EstadoDetalhes.forEach(estados => {
 
        const estadoElement = document.createElement('div');

     
        estadoElement.innerHTML = `
            <div>
            <ul>
                <li>${estados}.nome}</li>
            </ul>

            </div>
        `;
        estadoSection.appendChild(estadoElement);
    });
}
  
apresentaEstados()

 
