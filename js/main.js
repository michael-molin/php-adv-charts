$(document).ready(function() {
    var labelMesi = ['Gennaio', 'Febbraio' , 'Marzo' , 'Aprile' , 'Maggio' , 'Giugno' , 'Luglio' , 'Agosto' , 'Settembre' , 'Ottobre' , 'Novembre' , 'Dicembre'];
    $.ajax({
        url:'server/server1.php',
        method: 'GET',
        success: function(data) {
            var grafico= $('#grafico3');
            creaGrafico(grafico, data, 'line', labelMesi, '#f1c15d', '#3f8c84');
        },
        error: function(error) {
            alert('errore chiamata Ajax1');
        }
    })

    $.ajax({
        url:'server/server2.php',
        method: 'GET',
        success: function(data) {
            creaGrafico($('#grafico4'), data.fatturato.data, data.fatturato.type, labelMesi, '#94c4f4', '#0092b3');
            var nomi = Object.keys(data.fatturato_by_agent.data);
            var vendite = Object.values(data.fatturato_by_agent.data);
            creaGrafico($('#grafico5'), vendite, data.fatturato_by_agent.type, nomi, '#f25c05', '#fe804b');
        },
        error: function(error) {
            alert('errore chiamata Ajax2');
        }
    })

    function creaGrafico(grafico, data, tipo, label, colore1, colore2) {
        var ctx = grafico;
        var chart = new Chart(ctx, {
            type: tipo,
            data: {
                labels: label,
                datasets: [{
                    label: 'Dati ottenuti Ajax',
                    backgroundColor: colore1,
                    borderColor: colore2,
                    data: data
                }]
            },
            options: {}
        });
    }

});
