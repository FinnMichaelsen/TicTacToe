let fields = [
    null,
    'circle',
    'cross',
    null,
    null,
    null,
    null,
    null,
    null,
];

function init() {
render();
}

function render() {
    // Holen des content-Containers
    const contentContainer = document.getElementById('content');
    
    
    // Erzeugen der HTML-Tabelle
    let tableHtml = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol = generateAnimatedCircleSVG();
            } else if (fields[index] === 'cross') {
                symbol = generateAnimatedCrossSVG();
            } 
            tableHtml += `<td>${symbol}</td>`;
                
            
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    
    // Rendern der Tabelle im content-Container
    contentContainer.innerHTML = tableHtml;
}

// KREIS
function generateAnimatedCircleSVG() {
    const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <circle cx="35" cy="35" r="30" fill="none" stroke="#00B0EF" stroke-width="5">
        <animate attributeName="stroke-dasharray" from="0 188" to="188 188" dur="2s" fill="freeze" />
      </circle>
    </svg>
  `;
    return svgCode;
  }

  //KREUZ
  function generateAnimatedCrossSVG() {
    const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <line x1="10" y1="10" x2="60" y2="60" stroke="#ffc000" stroke-width="5">
        <animate attributeName="x2" from="10" to="60" dur="2s" fill="freeze" />
        <animate attributeName="y2" from="10" to="60" dur="2s" fill="freeze" />
      </line>
      <line x1="10" y1="60" x2="60" y2="10" stroke="#ffc000" stroke-width="5">
        <animate attributeName="x2" from="10" to="60" dur="2s" fill="freeze" />
        <animate attributeName="y2" from="60" to="10" dur="2s" fill="freeze" />
      </line>
    </svg>
  `;
    return svgCode;
  }