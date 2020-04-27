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

    $.ajax({
        url:'server/server3.php?access=clevel',
        method: 'GET',
        success: function(data) {
            if (data.length >= 1) {
                creaGrafico($('#grafico6'), data[0].data, data[0].type, labelMesi, 'red' , 'black');
            }
            if (data.length >= 2) {
                var nomi = Object.keys(data[1].data);
                var vendite = Object.values(data[1].data);
                creaGrafico($('#grafico7'), vendite, data[1].type, nomi, 'blue', 'green');
            }
            if (data.length == 3) {
                var team = Object.keys(data[2].data);
                var valori = Object.values(data[2].data);
                var ctx = $('#grafico8');
                var chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: team,
                        datasets: [{
                            label: 'team1',
                            borderColor: 'green',
                            data: valori[0]
                        },
                        {
                            label: 'team2',
                            borderColor: 'pink',
                            data: valori[1]
                        },
                        {
                            label: 'team3',
                            borderColor: 'black',
                            data: valori[2]
                        },
                    ]
                    },
                    options: {}
                });
            }


        },
        error: function(error) {
            alert('errore chiamata Ajax3');
        }
    })



    function creaGrafico(posizione, data, tipo, label, colore1, colore2) {
        var ctx = posizione;
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
