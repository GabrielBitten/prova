document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector('footer');
    const paragraph = document.createElement('p');
   
    let visitData = localStorage.getItem('visitData');

    if (visitData) {
        visitData = JSON.parse(visitData);
   
        visitData.count++;
   
        visitData.lastVisit = new Date().toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } else {
    
        visitData = {
            count: 1,
            lastVisit: new Date().toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
    }

  
    localStorage.setItem('visitData', JSON.stringify(visitData));
    
    paragraph.textContent = `Esta página foi visitada ${visitData.count} vezes. A última visita foi: ${visitData.lastVisit}`;
    footer.appendChild(paragraph);
});
