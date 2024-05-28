fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

    function run_visualization(data) {

        sortByCountryPopulation(data);// On trie par odre croissant la liste
        const top30ofCountries = data.slice(0,30); //on selectionne les 30 pays 
    
        // On veut les noms des pays et le nombre de population associé
        const country = top30ofCountries.map(country => country.country);
        const population = top30ofCountries.map(country => country.population);
        //on peux maintenant tracer le graphique
        const trace = {
            x: country,
            y: population,
            type: 'bar',
            marker: {
                color: '#CF4DFF'
            }
        };
        const layout = {
            title: 'Data distribution of countries population',
        };
        Plotly.newPlot('data-viz', [trace], layout);
    }
    

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}





