<?php
// Konfigurasi database
$servername = "localhost";  
$username = "root";
$password = "";            
$dbname = "nama_anak";      

// Buat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil parameter dari URL
$category = $_GET['category'];
$gender = $_GET['gender'];
$nameFormat = $_GET['nameFormat'];

// Query untuk mencari nama berdasarkan filter
$sql = "SELECT name, meaning FROM names 
        WHERE category = '$category' 
        AND gender = '$gender' 
        AND name_format = '$nameFormat'";

// Eksekusi query dan ambil hasilnya
$result = $conn->query($sql);

$names = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $names[] = $row;
    }
}

// Kembalikan hasil pencarian dalam format JSON
echo json_encode(['names' => $names]);

// Tutup koneksi
$conn->close();
?>