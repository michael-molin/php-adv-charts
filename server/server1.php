<?php
    include __DIR__ . '/../dati/dataMil1.php';
    header('Content-Type: application/json');
    echo json_encode($data);
?>
