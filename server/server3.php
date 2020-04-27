<?php
    include __DIR__ . '/../dati/dataMil3.php';
    $livello = $_GET['access'];

    $datiTrasmessi = [];
    switch ($livello) {
        case 'guest':
            $datiTrasmessi[] = $graphs[fatturato];
            break;
        case 'employee':
            $datiTrasmessi[] = $graphs[fatturato];
            $datiTrasmessi[] = $graphs[fatturato_by_agent];
            break;
        case 'clevel':
            $datiTrasmessi[] = $graphs[fatturato];
            $datiTrasmessi[] = $graphs[fatturato_by_agent];
            $datiTrasmessi[] = $graphs[team_efficiency];
            break;
        default:
            echo 'dato non valido';
            break;
    };

    $database3 = json_encode($datiTrasmessi);
    header('Content-Type: application/json');
    echo ($database3);
?>
