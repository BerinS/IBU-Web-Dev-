<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);


    if ($data) {
        $jsonFile = 'data.json';
        $jsonData = [];

        if (file_exists($jsonFile)) {
            $jsonData = json_decode(file_get_contents($jsonFile), true);
        }

        $jsonData[] = $data;

        if (file_put_contents($jsonFile, json_encode($jsonData, JSON_PRETTY_PRINT))) {
            echo json_encode(['message' => 'Data saved successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Error saving data']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Invalid data']);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
?>
