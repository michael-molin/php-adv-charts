<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Grafici</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <?php include 'dati/dataMil1.php';?>
        <div class="container-milestone">
            <h1>Milestone 1</h1>
            <div class="container">
                <canvas id="grafico1" data-dati="<?php echo $database; ?>"></canvas>
            </div>
            <div class="container">
                <canvas id="grafico2"></canvas>
            </div>
            <div class="container">
                <canvas id="grafico3"></canvas>
            </div>
        </div>

        <div class="container-milestone">
            <h1>Milestone 2</h1>
            <div class="container">
                <canvas id="grafico4"></canvas>
            </div>
            <div class="container">
                <canvas id="grafico5"></canvas>
            </div>
        </div>

        <div class="container-milestone milestone3">
            <h1>Milestone 3</h1>
            <div class="container">
                <canvas id="grafico6"></canvas>
            </div><div class="container">
                <canvas id="grafico7"></canvas>
            </div><div class="container">
                <canvas id="grafico8"></canvas>
            </div>
        </div>





        <script type="text/javascript">
            var dati = $('#grafico1').data('dati');
            var ctx = $('#grafico1');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Gennaio', 'Febbraio' , 'Marzo' , 'Aprile' , 'Maggio' , 'Giugno' , 'Luglio' , 'Agosto' , 'Settembre' , 'Ottobre' , 'Novembre' , 'Dicembre'],
                    datasets: [{
                        label: 'Dati tramite Attributi',
                        backgroundColor: 'rgba(230, 126, 34,1.0)',
                        borderColor: 'rgba(41, 128, 185,1.0)',
                        data: dati
                    }]
                },
                options: {}
            });
        </script>
        <script type="text/javascript">
            var dati = <?php echo $database; ?>;
            var ctx = $('#grafico2');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Gennaio', 'Febbraio' , 'Marzo' , 'Aprile' , 'Maggio' , 'Giugno' , 'Luglio' , 'Agosto' , 'Settembre' , 'Ottobre' , 'Novembre' , 'Dicembre'],
                    datasets: [{
                        label: 'Dati ottenuti tramite php echo $database',
                        backgroundColor: 'rgba(22, 160, 133,1.0)',
                        borderColor: 'rgba(192, 57, 43,1.0)',
                        data: dati
                    }]
                },
                options: {}
            });
        </script>
        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
