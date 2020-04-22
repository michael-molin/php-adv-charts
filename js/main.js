$(document).ready(function() {
    var dati = [];
    $.ajax({
        url:'server.php',
        method: 'GET',
        success: function(data) {
            dati=data;
            creaGrafico(dati);
        },
        error: function(error) {
            alert('errore chiamata');
        }
    })
    
    function creaGrafico(data) {
        var ctx = $('#grafico3');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Gennaio', 'Febbraio' , 'Marzo' , 'Aprile' , 'Maggio' , 'Giugno' , 'Luglio' , 'Agosto' , 'Settembre' , 'Ottobre' , 'Novembre' , 'Dicembre'],
                datasets: [{
                    label: 'Dati ottenuti Ajax',
                    backgroundColor: 'rgba(155, 89, 182,1.0)',
                    borderColor: 'rgba(44, 62, 80,1.0)',
                    data: data
                }]
            },
            options: {}
        });
    }

});
